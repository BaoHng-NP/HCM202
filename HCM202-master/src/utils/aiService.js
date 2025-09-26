import { AI_CONFIG, PROVIDER_CONFIGS } from "../config/aiConfig";

/**
 * Sends a message to the configured AI service and gets a response
 * @param {string} message - The user's message
 * @param {Array} previousMessages - Previous conversation messages
 * @returns {Promise<string>} - The AI's response
 */
export const sendMessageToAI = async (message, previousMessages = []) => {
  try {
    const { provider, apiKey, systemPrompt } = AI_CONFIG;

    // Format previous messages for context
    const formattedMessages = previousMessages
      .filter((msg) => msg.role === "user" || msg.role === "assistant")
      .map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

    // Add system prompt for context
    const messages = [
      { role: "system", content: systemPrompt },
      ...formattedMessages,
      { role: "user", content: message },
    ];

    // Debug logging
    console.log("Using provider:", provider);
    console.log("Provider config:", PROVIDER_CONFIGS[provider]);
    console.log(
      "API key available:",
      apiKey ? "Yes (length: " + apiKey.length + ")" : "No"
    );

    // Check if we have a valid API key before attempting to call external APIs
    if (provider === "openai" && apiKey && apiKey.trim() !== "") {
      try {
        return await sendToOpenAI(messages, apiKey);
      } catch (error) {
        console.warn(
          "OpenAI API error, falling back to mock response:",
          error.message
        );

        // Check if it's a quota error and provide helpful information
        if (
          error.message.includes("insufficient_quota") ||
          error.message.includes("429")
        ) {
          return getQuotaErrorResponse(message);
        }

        // For other errors, fall back to mock responses
        return getMockResponse(message);
      }
    } else if (provider === "gemini" && apiKey && apiKey.trim() !== "") {
      try {
        return await sendToGemini(messages, apiKey);
      } catch (error) {
        console.warn(
          "Gemini API error, falling back to mock response:",
          error.message
        );
        return getMockResponse(message);
      }
    } else {
      // Use mock response if no valid provider or API key
      console.info("Using mock AI responses (no valid API configuration)");
      return getMockResponse(message);
    }
  } catch (error) {
    console.error("Error in sendMessageToAI:", error);
    return "Xin lỗi, đã có lỗi xảy ra khi xử lý yêu cầu của bạn. Vui lòng thử lại sau.";
  }
};

/**
 * Sends messages to OpenAI API
 */
const sendToOpenAI = async (messages, apiKey) => {
  try {
    console.log("Sending request to OpenAI API...");

    const requestData = {
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0.7,
    };

    console.log("Request data:", JSON.stringify(requestData, null, 2));

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error(`OpenAI API error (${response.status}): ${errorText}`);
      throw new Error(`OpenAI API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    console.log("OpenAI response received:", data);
    return data.choices[0].message.content;
  } catch (error) {
    console.error("OpenAI API call failed:", error);
    throw error;
  }
};

/**
 * Sends messages to Google Gemini API
 */
const sendToGemini = async (messages, apiKey) => {
  try {
    console.log("Sending request to Gemini API...");

    // Convert messages to Gemini format - Gemini doesn't support 'system' role
    const geminiMessages = messages
      .filter((msg) => msg.role !== "system") // Remove system messages
      .map((msg) => ({
        role: msg.role === "assistant" ? "model" : msg.role,
        parts: [{ text: msg.content }],
      }));

    // If there's a system prompt, prepend it to the first user message
    const systemPrompt = messages.find((msg) => msg.role === "system")?.content;
    if (
      systemPrompt &&
      geminiMessages.length > 0 &&
      geminiMessages[0].role === "user"
    ) {
      geminiMessages[0].parts[0].text = `${systemPrompt}\n\n${geminiMessages[0].parts[0].text}`;
    }

    console.log("Original messages:", messages);
    console.log("Filtered Gemini messages:", geminiMessages);

    const requestData = {
      contents: geminiMessages,
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    };

    console.log("Gemini request data:", JSON.stringify(requestData, null, 2));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      }
    );

    if (!response.ok) {
      const errorText = await response.text().catch(() => "Unknown error");
      console.error(`Gemini API error (${response.status}): ${errorText}`);
      throw new Error(`Gemini API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    console.log("Gemini response received:", data);

    if (data.candidates && data.candidates[0] && data.candidates[0].content) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error("Invalid response format from Gemini API");
    }
  } catch (error) {
    console.error("Gemini API call failed:", error);
    throw error;
  }
};

/**
 * Provides helpful information when quota is exceeded
 */
const getQuotaErrorResponse = (message) => {
  return `Tôi hiểu bạn muốn hỏi về "${message}", nhưng hiện tại tôi đang gặp vấn đề với quota API.

🔧 **Để khắc phục vấn đề này:**

1. **Kiểm tra tài khoản Gemini:**
   - Đăng nhập vào https://aistudio.google.com
   - Kiểm tra phần "API keys" và quota sử dụng
   - Đảm bảo API key còn hoạt động

2. **Tạm thời sử dụng chế độ offline:**
   - Thay đổi provider từ 'gemini' thành 'mock' trong file aiConfig.js
   - Tôi sẽ trả lời dựa trên kiến thức về tư tưởng Hồ Chí Minh

Trong khi chờ khắc phục, tôi có thể trả lời các câu hỏi về tư tưởng Hồ Chí Minh về xây dựng Đảng và Nhà nước.`;
};

/**
 * Enhanced mock function for testing without an API
 */
const getMockResponse = (message) => {
  const lowerMsg = message.toLowerCase();

  // Basic greetings
  if (
    lowerMsg.includes("xin chào") ||
    lowerMsg.includes("hello") ||
    lowerMsg.includes("chào")
  ) {
    return 'Xin chào! Tôi là AI chuyên gia về TƯ TƯỞNG HỒ CHÍ MINH, được huấn luyện chuyên sâu về "Đảng Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân". Tôi có thể giúp bạn tìm hiểu về:\n\n🔴 Xây dựng Đảng thật sự trong sạch, vững mạnh\n🔵 Xây dựng Nhà nước của dân, do dân, vì dân\n⚖️ Kiểm soát quyền lực nhà nước\n🛡️ Phòng chống tiêu cực "giặc nội xâm"\n\nBạn muốn hỏi về điều gì?';
  }

  // Questions about power control
  if (
    lowerMsg.includes("kiểm soát quyền lực") ||
    lowerMsg.includes("quyền lực nhà nước") ||
    lowerMsg.includes("phân quyền") ||
    lowerMsg.includes("lập pháp") ||
    lowerMsg.includes("hành pháp") ||
    lowerMsg.includes("tư pháp")
  ) {
    return '⚖️ **KIỂM SOÁT QUYỀN LỰC NHÀ NƯỚC** theo tư tưởng Hồ Chí Minh:\n\n🎯 **Tính tất yếu:**\n- Hồ Chí Minh khẳng định: "Kiểm soát quyền lực nhà nước là TẤT YẾU"\n- Quyền lực do nhân dân ủy thác cho Nhà nước\n- Nếu không kiểm soát → dẫn đến LẠM QUYỀN\n\n👥 **Chủ thể kiểm soát:**\n- NHÂN DÂN: Chủ thể tối cao của quyền lực\n- ĐẢNG: Có trách nhiệm kiểm soát quyền lực Nhà nước\n- Người nói: "Phải tổ chức sự kiểm soát, mà muốn kiểm soát đúng thì cũng phải có quần chúng giúp đỡ"\n\n🏛️ **Cơ chế kiểm soát:**\n- Phân công, phân nhiệm rõ ràng giữa các cơ quan\n- Kiểm soát quyền lực giữa: Lập pháp - Hành pháp - Tư pháp';
  }

  // Questions about "internal enemies"
  if (
    lowerMsg.includes("giặc nội xâm") ||
    lowerMsg.includes("tham ô") ||
    lowerMsg.includes("lãng phí") ||
    lowerMsg.includes("quan liêu") ||
    lowerMsg.includes("tham nhũng") ||
    lowerMsg.includes("tiêu cực")
  ) {
    return '🛡️ **"GIẶC NỘI XÂM"** - Tư tưởng của Hồ Chí Minh:\n\n⚠️ **Khái niệm:**\n- Hồ Chí Minh gọi tham ô, lãng phí, quan liêu là "GIẶC NỘI XÂM"\n- "Giặc ở trong lòng" - NGUY HIỂM hơn giặc ngoại xâm\n- Phê phán: "Lấy của công dùng vào việc tư, quên cả thanh liêm, đạo đức"\n\n🔥 **3 căn bệnh chính:**\n- **THAM Ô:** Thu vén của tiền, lợi dụng quyền hành\n- **LÃNG PHÍ:** Căn bệnh Hồ Chí Minh lên án gay gắt\n- **QUAN LIÊU:** "Bệnh gốc" sinh ra tham ô, lãng phí\n\n💡 **Đặc điểm quan liêu:**\n- Không sát việc, không gần gũi quần chúng\n- Không kiểm tra, không biết việc mà cứ ngồi xét\n- Xa rời thực tế, xa rời nhân dân\n\n⚡ **Nguyên tắc:** Cán bộ chức vụ càng cao, trách nhiệm càng lớn, phải làm gương trước!';
  }

  // Questions about Party building
  if (
    lowerMsg.includes("xây dựng đảng") ||
    lowerMsg.includes("đảng trong sạch") ||
    lowerMsg.includes("cán bộ đảng viên") ||
    lowerMsg.includes("đảng cộng sản") ||
    lowerMsg.includes("chỉnh đốn") ||
    lowerMsg.includes("đường lối đảng")
  ) {
    return '🔴 **XÂY DỰNG ĐẢNG THẬT SỰ TRONG SẠCH, VỮNG MẠNH:**\n\n📖 **1. Xây dựng về ĐƯỜNG LỐI:**\n- Đảng phải đề ra đường lối, chủ trương ĐÚNG ĐẮN\n- Dựa trên Mác-Lênin sáng tạo + tư tưởng Hồ Chí Minh\n- Phù hợp hoàn cảnh từng giai đoạn, thời kỳ\n- Thể chế hóa thành hành động của toàn hệ thống\n\n🔧 **2. TỔ CHỨC THỰC HIỆN & CHỈNH ĐỐN:**\n- Thường xuyên chỉnh đốn nội bộ\n- Đấu tranh chống "suy thoái tư tưởng chính trị"\n- Chống "tự diễn biến", "tự chuyển hóa"\n- Để Đảng xứng đáng là người cầm quyền\n\n👨‍💼 **3. CÁN BỘ ĐẢNG VIÊN:**\n- Đảng viên vừa là LÃNH ĐẠO vừa là "ĐÀY TỚ trung thành" của nhân dân\n- Thống nhất giữa NÓI và LÀM\n- Cán bộ chiến lược phải nêu cao trách nhiệm GƯƠNG MẪU\n- Luôn đặt lợi ích nhân dân lên hàng đầu';
  }

  // Questions about State building
  if (
    lowerMsg.includes("xây dựng nhà nước") ||
    lowerMsg.includes("của dân do dân vì dân") ||
    lowerMsg.includes("nhà nước") ||
    lowerMsg.includes("pháp luật") ||
    lowerMsg.includes("quyền con người")
  ) {
    return "🔵 **XÂY DỰNG NHÀ NƯỚC CỦA DÂN, DO DÂN, VÌ DÂN:**\n\n🎯 **MỤC TIÊU & PHÁP LUẬT:**\n- Xây dựng Nhà nước THẬT SỰ trong sạch, vững mạnh\n- Hoàn thiện pháp luật → nâng cao hiệu lực Nhà nước\n- Tôn trọng, bảo đảm quyền CON NGƯỜI\n- Quản lý theo pháp luật + đạo đức xã hội\n\n⚖️ **CƠ CHẾ KIỂM SOÁT:**\n- Phân định rõ: Lập pháp - Hành pháp - Tư pháp\n- Phân quyền Trung ương ↔ Địa phương\n- Tăng cường tuyển chọn, đánh giá, giám sát\n- Trách nhiệm người đứng đầu cơ quan\n\n👥 **ĐỘI NGŨ CÁN BỘ:**\n- Bản lĩnh chính trị VỮNG VÀNG\n- Phẩm chất đạo đức TRONG SÁNG\n- Năng lực chuyên môn PHÙ HỢP\n- Đẩy mạnh đấu tranh chống tham nhũng, lãng phí\n\n🔴 **VAI TRÒ ĐẢNG:** Lãnh đạo bằng chủ trương lớn, thể chế hóa đường lối thành pháp luật";
  }

  // Questions about Party-State relationship
  if (
    lowerMsg.includes("mối quan hệ") ||
    lowerMsg.includes("đảng và nhà nước") ||
    lowerMsg.includes("lãnh đạo") ||
    lowerMsg.includes("đảng lãnh đạo")
  ) {
    return '🤝 **MỐI QUAN HỆ ĐẢNG - NHÀ NƯỚC** theo Hồ Chí Minh:\n\n🔴 **VAI TRÒ CỦA ĐẢNG:**\n- "Đảng phải là người anh cả thật sự của nhân dân"\n- "Công bộc thật trung thành của nhân dân"\n- Lãnh đạo toàn diện cách mạng\n- Đề ra đường lối, chủ trương đúng đắn\n\n🔵 **BẢN CHẤT NHÀ NƯỚC:**\n- "Nhà nước ta là CỦA DÂN, DO DÂN và VÌ DÂN"\n- Quyền lực từ nhân dân, thuộc về nhân dân\n- Thực hiện đường lối của Đảng\n- Chịu sự giám sát của nhân dân\n\n⚖️ **NGUYÊN TẮC LÃNH ĐẠO:**\n- Đảng lãnh đạo bằng chủ trương, chính sách LỚN\n- Thể chế hóa đường lối thành pháp luật\n- Đảng viên gương mẫu tuân thủ pháp luật\n- Không can thiệp trực tiếp vào hoạt động Nhà nước\n\n💡 **KẾT LUẬN:** "Sự trong sạch, vững mạnh của Đảng là yếu tố QUYẾT ĐỊNH cho sự thành công của việc xây dựng Nhà nước"';
  }

  // Questions about principles and methods
  if (
    lowerMsg.includes("nguyên tắc") ||
    lowerMsg.includes("phương pháp") ||
    lowerMsg.includes("biện pháp") ||
    lowerMsg.includes("cần kiệm liêm chính") ||
    lowerMsg.includes("đức tài")
  ) {
    return '📋 **NGUYÊN TẮC & BIỆN PHÁP** xây dựng Đảng, Nhà nước:\n\n🎯 **NGUYÊN TẮC CƠ BẢN:**\n- Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ\n- Tập trung dân chủ trong tổ chức\n- Pháp chế xã hội chủ nghĩa\n- Kiểm soát quyền lực hiệu quả\n\n🔧 **BIỆN PHÁP THỰC HIỆN:**\n- Chỉnh đốn Đảng thường xuyên\n- Hoàn thiện hệ thống pháp luật\n- Đẩy mạnh đấu tranh chống tiêu cực\n- Xây dựng đội ngũ cán bộ có đức, có tài\n\n⚡ **YÊU CẦU CỤ THỂ:**\n- Thống nhất giữa lời NÓI và việc LÀM\n- Gương mẫu từ cán bộ lãnh đạo\n- Gần gũi với nhân dân\n- Minh bạch trong hoạt động\n\n🛡️ **PHÒNG CHỐNG TIÊU CỰC:**\n- "Không có vùng cấm, không có ngoại lệ"\n- Xử lý nghiêm các vi phạm\n- Giáo dục, răn đe hiệu quả';
  }

  // STRICTER CHECK: Only respond if it contains specific academic keywords
  const validKeywords = [
    "hồ chí minh",
    "tư tưởng hồ chí minh",
    "chương 4",
    "4.2.3",
    "4.3",
    "đảng cộng sản việt nam",
    "nhà nước việt nam",
    "xây dựng đảng",
    "xây dựng nhà nước",
    "kiểm soát quyền lực",
    "giặc nội xâm",
    "tham ô",
    "lãng phí",
    "quan liêu",
    "của dân do dân vì dân",
    "cán bộ đảng viên",
    "chỉnh đốn",
    "đường lối",
    "pháp luật",
    "lập pháp",
    "hành pháp",
    "tư pháp",
    "dân chủ",
    "cách mạng",
  ];

  const hasValidKeyword = validKeywords.some((keyword) =>
    lowerMsg.includes(keyword)
  );

  if (hasValidKeyword) {
    return `Tôi hiểu bạn muốn tìm hiểu về "${message}" trong tư tưởng Hồ Chí Minh.

📚 **Tôi có thể trả lời chi tiết về các chủ đề sau:**

🔴 **Xây dựng Đảng:**
- Đường lối, tổ chức thực hiện và chỉnh đốn
- Cán bộ đảng viên và vai trò gương mẫu
- Đấu tranh chống suy thoái tư tưởng

🔵 **Xây dựng Nhà nước:**
- Mục tiêu "của dân, do dân, vì dân"
- Cơ chế kiểm soát quyền lực
- Hoàn thiện pháp luật và đội ngũ cán bộ

⚖️ **Kiểm soát quyền lực:**
- Tính tất yếu và chủ thể kiểm soát
- Cơ chế phân quyền và giám sát

🛡️ **Phòng chống "giặc nội xâm":**
- Tham ô, lãng phí, quan liêu
- Biện pháp đấu tranh và phòng ngừa

Bạn muốn tìm hiểu về chủ đề nào cụ thể?`;
  }

  // STRICT: Reject unrelated questions
  return `Xin lỗi, tôi chỉ được thiết kế để trả lời các câu hỏi về **TƯ TƯỞNG HỒ CHÍ MINH VỀ XÂY DỰNG ĐẢNG VÀ NHÀ NƯỚC** (Chương 4).

Câu hỏi "${message}" không thuộc phạm vi chuyên môn của tôi.

🎯 **Tôi chỉ có thể giúp bạn về:**
- 🔴 Xây dựng Đảng thật sự trong sạch, vững mạnh
- 🔵 Xây dựng Nhà nước của dân, do dân, vì dân  
- ⚖️ Kiểm soát quyền lực nhà nước
- 🛡️ Phòng chống tiêu cực "giặc nội xâm"
- 🤝 Mối quan hệ Đảng - Nhà nước

**Gợi ý câu hỏi:**
- "Hồ Chí Minh hiểu thế nào về kiểm soát quyền lực?"
- "Tại sao tham ô, lãng phí được gọi là 'giặc nội xâm'?"
- "Đảng cần làm gì để thật sự trong sạch, vững mạnh?"

Bạn có muốn hỏi về một trong những chủ đề này không?`;
};
