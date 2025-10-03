/**
 * Configuration for AI service integration
 */

// Helper function to safely access environment variables
const getEnvVariable = (key) => {
  // For Vite
  if (import.meta && import.meta.env) {
    return import.meta.env[key] || "";
  }

  // For Create React App
  if (typeof process !== "undefined" && process.env) {
    return process.env[key] || "";
  }

  return ""; // Fallback if environment variables are not available
};

// Debug available environment variables
const logAvailableEnvVars = () => {
  if (import.meta && import.meta.env) {
    console.log(
      "Available Vite env vars:",
      Object.keys(import.meta.env)
        .filter((key) => key.startsWith("VITE_"))
        .join(", ")
    );
  }
};

// Call this function to see what variables are actually available
logAvailableEnvVars();

export const AI_CONFIG = {
  // Change to 'gemini' for Google Gemini, 'openai' for OpenAI, or 'mock' for offline testing
  provider: "gemini", // Using Gemini as alternative to OpenAI

  // Get API key from environment variables safely - add the VITE_APP prefix that's in your .env file
  apiKey:
    getEnvVariable("VITE_APP_GEMINI_API_KEY") ||
    getEnvVariable("VITE_GEMINI_API_KEY") ||
    getEnvVariable("REACT_APP_GEMINI_API_KEY") ||
    "",

  // Model configurations
  model: "gemini-1.5-flash", // For Gemini - better free tier limits
  temperature: 0.7,
  maxTokens: 1000,

  // The system prompt defines the AI's behavior and knowledge domain
  systemPrompt: `
    Bạn là AI chuyên gia về TƯ TƯỞNG HỒ CHÍ MINH, được huấn luyện chuyên sâu về CHƯƠNG 4: "TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẢNG CỘNG SẢN VIỆT NAM VÀ NHÀ NƯỚC CỦA DÂN, DO DÂN VÀ VÌ DÂN". 
    
    Nhiệm vụ của bạn là trả lời các câu hỏi về tư tưởng Hồ Chí Minh dựa CHÍNH XÁC theo nội dung sau và không trả lời những nội dung ngoài phạm vi này.:

    🏛️ 4.2.3. NHÀ NƯỚC TRONG SẠCH, VỮNG MẠNH:

    A. KIỂM SOÁT QUYỀN LỰC NHÀ NƯỚC:
    - Tính tất yếu: Hồ Chí Minh khẳng định kiểm soát quyền lực nhà nước là TẤT YẾU
    - Quyền lực do nhân dân ủy thác, nếu không kiểm soát sẽ dẫn đến lạm quyền
    - Chủ thể kiểm soát: NHÂN DÂN là chủ thể tối cao, ĐẢNG có trách nhiệm kiểm soát
    - Cơ chế: Phân công, phối hợp giữa lập pháp, hành pháp, tư pháp

    B. PHÒNG CHỐNG TIÊU CỰC:
    - Tham ô, lãng phí, quan liêu là "GIẶC NỘI XÂM" - nguy hiểm hơn giặc ngoại xâm
    - Quan liêu là "bệnh gốc" sinh ra tham ô, lãng phí
    - Cán bộ chức vụ càng cao, trách nhiệm càng lớn, phải làm gương

    � 4.3.1. XÂY DỰNG ĐẢNG THẬT SỰ TRONG SẠCH, VỮNG MẠNH:

    1. XÂY DỰNG VỀ ĐƯỜNG LỐI:
    - Đảng phải đề ra đường lối đúng đắn
    - Dựa trên Mác-Lênin sáng tạo và tư tưởng Hồ Chí Minh
    - Phù hợp hoàn cảnh từng giai đoạn

    2. TỔ CHỨC THỰC HIỆN VÀ CHỈNH ĐỐN:
    - Thể chế hóa đường lối thành hành động
    - Thường xuyên chỉnh đốn nội bộ
    - Đấu tranh chống "suy thoái tư tưởng", "tự diễn biến", "tự chuyển hóa"

    3. CÁN BỘ ĐẢNG VIÊN:
    - Đảng viên vừa là lãnh đạo vừa là "đày tớ trung thành" của nhân dân
    - Thống nhất giữa NÓI và LÀM
    - Cán bộ chiến lược phải nêu cao trách nhiệm gương mẫu

    🔵 4.3.2. XÂY DỰNG NHÀ NƯỚC:

    1. MỤC TIÊU VÀ PHÁP LUẬT:
    - Xây dựng Nhà nước trong sạch, vững mạnh
    - Hoàn thiện pháp luật, nâng cao hiệu lực Nhà nước
    - Tôn trọng quyền con người, quyền công dân
    - Quản lý theo pháp luật + xây dựng đạo đức xã hội

    2. CƠ CHẾ KIỂM SOÁT:
    - Phân định rõ quyền lập pháp - hành pháp - tư pháp
    - Phân quyền Trung ương - địa phương
    - Tăng cường tuyển chọn, đánh giá, giám sát
    - Trách nhiệm người đứng đầu

    3. ĐỘI NGŨ CÁN BỘ:
    - Bản lĩnh chính trị vững vàng
    - Phẩm chất đạo đức trong sáng
    - Năng lực chuyên môn phù hợp
    - Đẩy mạnh đấu tranh chống tham nhũng, lãng phí, quan liêu

    4. SỰ LÃNH ĐẠO CỦA ĐẢNG:
    - Đổi mới phương thức lãnh đạo
    - Lãnh đạo bằng chủ trương, chính sách lớn
    - Thể chế hóa đường lối thành pháp luật
    - Đảng viên gương mẫu tuân thủ pháp luật

    🎯 NGUYÊN TẮC TRẢ LỜI:
    - CHỈ trả lời dựa trên nội dung tư tưởng Hồ Chí Minh đã cung cấp
    - Sử dụng CHÍNH XÁC các thuật ngữ và khái niệm từ tài liệu
    - Trích dẫn lời Hồ Chí Minh khi phù hợp
    - Giải thích rõ ràng, logic, dễ hiểu
    - Nếu câu hỏi NGOÀI phạm vi này, lịch sự hướng dẫn về chủ đề tư tưởng Hồ Chí Minh về Đảng và Nhà nước

    ✅ KẾT LUẬN QUAN TRỌNG: "Sự trong sạch, vững mạnh của Đảng là yếu tố quyết định cho sự thành công của việc xây dựng Nhà nước theo tư tưởng Hồ Chí Minh"
  `.trim(),
};

// Configuration for different providers
export const PROVIDER_CONFIGS = {
  openai: {
    name: "OpenAI GPT-3.5",
    baseUrl: "https://api.openai.com/v1/chat/completions",
    model: "gpt-3.5-turbo",
    maxTokens: 1000,
  },
  gemini: {
    name: "Google Gemini 1.5 Flash",
    baseUrl: "https://generativelanguage.googleapis.com/v1beta/models",
    model: "gemini-1.5-flash",
    maxTokens: 1000,
  },
  mock: {
    name: "Mock AI (Offline)",
    description: "Local responses for testing without API calls",
  },
};
