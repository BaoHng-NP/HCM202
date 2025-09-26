import React, { useState } from "react";
import { Card, Button, Divider } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import Quiz from "../components/Quiz";

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("hcm_ideology");

  const quizzes = {
    hcm_ideology: {
      title: "Tư tưởng Hồ Chí Minh về Đảng và Nhà nước",
      icon: "�️",
      questions: [
        {
          question: "Theo Hồ Chí Minh, Đảng phải là gì đối với nhân dân?",
          options: [
            "Người lãnh đạo tuyệt đối",
            "Người anh cả thật sự và công bộc trung thành",
            "Cơ quan quyền lực cao nhất",
            "Đại diện chính trị duy nhất",
          ],
          correctAnswer: 1,
          explanation:
            "Hồ Chí Minh khẳng định: 'Đảng phải là người anh cả thật sự của nhân dân, là công bộc thật trung thành của nhân dân'",
        },
        {
          question: "Hồ Chí Minh coi tham ô, lãng phí, quan liêu là gì?",
          options: [
            "Vấn đề xã hội thông thường",
            "Giặc nội xâm",
            "Khuyết điểm nhỏ",
            "Hiện tượng tạm thời",
          ],
          correctAnswer: 1,
          explanation:
            "Hồ Chí Minh gọi tham ô, lãng phí, quan liêu là 'giặc nội xâm', 'giặc ở trong lòng', nguy hiểm hơn giặc ngoại xâm",
        },
        {
          question:
            "Theo tư tưởng Hồ Chí Minh, 'Nhà nước của dân, do dân, vì dân' có nghĩa là gì?",
          options: [
            "Chỉ do dân bầu ra",
            "Quyền lực thuộc về nhân dân, do nhân dân thực hiện và phục vụ nhân dân",
            "Nhà nước làm tất cả cho dân",
            "Dân quyết định mọi việc",
          ],
          correctAnswer: 1,
          explanation:
            "Ba nguyên tắc: CỦA DÂN (quyền lực thuộc về nhân dân), DO DÂN (nhân dân tham gia quản lý), VÌ DÂN (phục vụ lợi ích nhân dân)",
        },
        {
          question:
            "Tại sao Hồ Chí Minh cho rằng kiểm soát quyền lực nhà nước là tất yếu?",
          options: [
            "Để tránh độc tài",
            "Vì quyền lực do nhân dân ủy thác, không kiểm soát sẽ dẫn đến lạm quyền",
            "Để thực hiện dân chủ",
            "Vì luật pháp quy định",
          ],
          correctAnswer: 1,
          explanation:
            "Hồ Chí Minh khẳng định: quyền lực do nhân dân ủy thác cho Nhà nước, nếu không kiểm soát thì cơ quan và cán bộ nhà nước có thể trở nên lạm quyền",
        },
        {
          question:
            "Theo Hồ Chí Minh, ai là chủ thể tối cao trong việc kiểm soát quyền lực nhà nước?",
          options: ["Đảng Cộng sản", "Quốc hội", "Nhân dân", "Chính phủ"],
          correctAnswer: 2,
          explanation:
            "Hồ Chí Minh khẳng định: 'Nhân dân là chủ thể tối cao của quyền lực nhà nước, vì thế nhân dân có quyền kiểm soát quyền lực nhà nước'",
        },
        {
          question:
            "Trong tư tưởng Hồ Chí Minh, bệnh quan liêu có đặc điểm gì?",
          options: [
            "Làm việc không hiệu quả",
            "Không sát việc, không gần gũi quần chúng, là bệnh gốc sinh ra tham ô lãng phí",
            "Thiếu trách nhiệm",
            "Làm việc chậm chạp",
          ],
          correctAnswer: 1,
          explanation:
            "Hồ Chí Minh cho rằng quan liêu là căn bệnh khiến cán bộ không sát việc, không gần gũi quần chúng, không kiểm tra, là 'bệnh gốc sinh ra tham ô, lãng phí'",
        },
        {
          question:
            "Theo Hồ Chí Minh, đường lối của Đảng phải dựa trên nền tảng nào?",
          options: [
            "Kinh nghiệm thực tiễn",
            "Mác-Lênin sáng tạo và tư tưởng Hồ Chí Minh",
            "Ý kiến nhân dân",
            "Tình hình quốc tế",
          ],
          correctAnswer: 1,
          explanation:
            "Đường lối phải dựa trên nền tảng lý luận Mác-Lênin sáng tạo và tư tưởng Hồ Chí Minh, phù hợp với hoàn cảnh đất nước từng giai đoạn",
        },
        {
          question:
            "Trong công tác xây dựng Đảng, Hồ Chí Minh đặc biệt chú trọng đấu tranh chống điều gì?",
          options: [
            "Tư tưởng cực đoan",
            "Suy thoái về tư tưởng chính trị, đạo đức, lối sống",
            "Chủ nghĩa cá nhân",
            "Tham nhũng quyền lực",
          ],
          correctAnswer: 1,
          explanation:
            "Cần đấu tranh chống các biểu hiện 'suy thoái về tư tưởng chính trị, đạo đức, lối sống', 'tự diễn biến', 'tự chuyển hóa'",
        },
        {
          question: "Đảng viên theo tư tưởng Hồ Chí Minh phải có đặc điểm gì?",
          options: [
            "Chỉ cần có năng lực",
            "Vừa là người lãnh đạo vừa là người đày tớ trung thành của nhân dân",
            "Chỉ cần trung thành với Đảng",
            "Có trình độ cao",
          ],
          correctAnswer: 1,
          explanation:
            "Hồ Chí Minh nói: 'Đảng viên phải luôn xứng đáng vừa là người lãnh đạo vừa là người đày tớ thật trung thành của nhân dân'",
        },
        {
          question:
            "Nguyên tắc quan trọng nhất trong cách cư xử của cán bộ đảng viên theo Hồ Chí Minh là gì?",
          options: [
            "Kỷ luật nghiêm minh",
            "Thống nhất giữa nói và làm",
            "Tuân thủ mệnh lệnh",
            "Đoàn kết nội bộ",
          ],
          correctAnswer: 1,
          explanation:
            "Hồ Chí Minh đặc biệt nhấn mạnh 'thống nhất giữa nói và làm' - đây là nguyên tắc căn bản trong tư tưởng và hành động",
        },
        {
          question:
            "Mục tiêu xây dựng Nhà nước theo tư tưởng Hồ Chí Minh là gì?",
          options: [
            "Nhà nước hùng mạnh",
            "Nhà nước thật sự trong sạch, vững mạnh",
            "Nhà nước hiện đại",
            "Nhà nước dân chủ",
          ],
          correctAnswer: 1,
          explanation:
            "Mục tiêu là 'xây dựng Nhà nước thật sự trong sạch, vững mạnh' của dân, do dân, vì dân",
        },
        {
          question:
            "Để xây dựng Nhà nước hiệu quả, Hồ Chí Minh chú trọng việc gì?",
          options: [
            "Tăng cường quyền lực",
            "Hoàn thiện pháp luật gắn với tổ chức thi hành pháp luật",
            "Mở rộng bộ máy",
            "Tập trung quyền lực",
          ],
          correctAnswer: 1,
          explanation:
            "Cần 'đẩy mạnh việc hoàn thiện pháp luật gắn với tổ chức thi hành pháp luật nhằm nâng cao hiệu lực, hiệu quả của Nhà nước'",
        },
        {
          question:
            "Cơ chế kiểm soát quyền lực theo Hồ Chí Minh cần làm rõ điều gì?",
          options: [
            "Vai trò của Đảng",
            "Cơ chế phân công, phối hợp giữa lập pháp, hành pháp, tư pháp",
            "Quyền hạn lãnh đạo",
            "Trách nhiệm cá nhân",
          ],
          correctAnswer: 1,
          explanation:
            "Cần 'xác định rõ cơ chế phân công, phối hợp thực thi quyền lực nhà nước, nhất là cơ chế kiểm soát quyền lực giữa các cơ quan lập pháp, hành pháp, tư pháp'",
        },
        {
          question:
            "Tiêu chuẩn cán bộ công chức theo tư tưởng Hồ Chí Minh cần có yếu tố nào?",
          options: [
            "Chỉ cần có năng lực",
            "Bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng, năng lực chuyên môn phù hợp",
            "Chỉ cần trung thành",
            "Chỉ cần có trình độ",
          ],
          correctAnswer: 1,
          explanation:
            "Cần 'bản lĩnh chính trị vững vàng, phẩm chất đạo đức trong sáng, trình độ, năng lực chuyên môn phù hợp'",
        },
        {
          question:
            "Nguyên tắc đấu tranh phòng chống tham nhũng theo tinh thần Hồ Chí Minh là gì?",
          options: [
            "Có vùng cấm nhất định",
            "Không có vùng cấm, không có ngoại lệ",
            "Tùy từng trường hợp",
            "Ưu tiên giáo dục",
          ],
          correctAnswer: 1,
          explanation:
            "Nguyên tắc 'không có vùng cấm, không có ngoại lệ' trong đấu tranh phòng chống tham nhũng, lãng phí, quan liêu",
        },
        {
          question:
            "Đảng lãnh đạo Nhà nước bằng cách nào theo tư tưởng Hồ Chí Minh?",
          options: [
            "Can thiệp trực tiếp",
            "Các chủ trương, chính sách lớn và thể chế hóa đường lối thành pháp luật",
            "Quyết định mọi việc",
            "Kiểm soát toàn bộ",
          ],
          correctAnswer: 1,
          explanation:
            "Đảng lãnh đạo Nhà nước bằng 'các chủ trương, chính sách lớn, lãnh đạo thể chế hóa các quan điểm, đường lối thành chính sách, pháp luật'",
        },
        {
          question:
            "Yếu tố quyết định thành công việc xây dựng Nhà nước theo Hồ Chí Minh là gì?",
          options: [
            "Sự giàu mạnh của đất nước",
            "Sự trong sạch, vững mạnh của Đảng",
            "Sự ủng hộ của nhân dân",
            "Hệ thống pháp luật hoàn thiện",
          ],
          correctAnswer: 1,
          explanation:
            "'Sự trong sạch, vững mạnh của Đảng là yếu tố quyết định cho sự thành công của việc xây dựng Nhà nước theo tư tưởng Hồ Chí Minh'",
        },
        {
          question:
            "Hồ Chí Minh cho rằng cán bộ có chức vụ càng cao thì như thế nào?",
          options: [
            "Quyền lực càng lớn",
            "Trách nhiệm càng lớn và cần phải làm gương trước",
            "Đặc quyền càng nhiều",
            "Uy tín càng cao",
          ],
          correctAnswer: 1,
          explanation:
            "Hồ Chí Minh khẳng định: 'Cán bộ, công chức giữ chức vụ càng cao, trách nhiệm càng lớn và cần phải làm trước gương'",
        },
        {
          question:
            "Để kiểm soát quyền lực đúng đắn, Hồ Chí Minh cho rằng cần có gì?",
          options: [
            "Hệ thống giám sát",
            "Quần chúng giúp đỡ",
            "Pháp luật nghiêm khắc",
            "Cơ quan chuyên trách",
          ],
          correctAnswer: 1,
          explanation:
            "Hồ Chí Minh nói: 'Phải tổ chức sự kiểm soát, mà muốn kiểm soát đúng thì cũng phải có quần chúng giúp đỡ'",
        },
        {
          question:
            "Trong xây dựng Nhà nước, Hồ Chí Minh coi trọng việc gì ngoài pháp luật?",
          options: [
            "Truyền thống văn hóa",
            "Xây dựng nền tảng đạo đức xã hội",
            "Giáo dục chính trị",
            "Tuyên truyền tư tưởng",
          ],
          correctAnswer: 1,
          explanation:
            "Cần 'quản lý đất nước theo pháp luật, đồng thời coi trọng xây dựng nền tảng đạo đức xã hội'",
        },
      ],
    },
  };

  const currentQuiz = quizzes[selectedQuiz];

  return (
    <div className="max-w-4xl mx-auto mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-header">Kiểm tra tư tưởng Hồ Chí Minh</h1>
        <div className="section-quote">
          "Đảng phải là người anh cả thật sự của nhân dân, là công bộc thật
          trung thành của nhân dân"
        </div>

        {/* Quiz Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Card className="content-card">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🏛️</span>
              <h3 className="text-xl font-semibold text-primary">
                Bộ câu hỏi tư tưởng Hồ Chí Minh
              </h3>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/20">
              <p className="text-gray-700 text-center">
                <strong>20 câu hỏi</strong> về tư tưởng Hồ Chí Minh về Đảng Cộng
                sản Việt Nam và Nhà nước của dân, do dân, vì dân
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Current Quiz Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedQuiz}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <Card className="content-card bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
                <div className="flex items-center">
                  <span className="text-3xl mr-4">{currentQuiz.icon}</span>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">
                      {currentQuiz.title}
                    </h2>
                    <p className="text-gray-600 mt-1">
                      Kiểm tra hiểu biết của bạn về tư tưởng chính trị của Bác
                      Hồ
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <Quiz questions={currentQuiz.questions} />
          </motion.div>
        </AnimatePresence>

        {/* Quiz Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <Card className="content-card">
            <h3 className="text-xl font-semibold text-primary mb-4">
              � Thông tin bộ câu hỏi
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">🏛️</div>
                  <h5 className="font-semibold text-blue-800 mb-1">
                    Chủ đề chính
                  </h5>
                  <p className="text-xs text-blue-600">Đảng và Nhà nước</p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-green-100 border border-green-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <h5 className="font-semibold text-green-800 mb-1">
                    Số câu hỏi
                  </h5>
                  <p className="text-xs text-green-600">
                    {currentQuiz.questions.length} câu
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200">
                <div className="text-center">
                  <div className="text-2xl mb-2">⭐</div>
                  <h5 className="font-semibold text-purple-800 mb-1">Độ khó</h5>
                  <p className="text-xs text-purple-600">Trung cấp</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-center text-sm text-gray-600">
                <h4 className="font-semibold text-gray-800 mb-2">
                  Nội dung kiểm tra:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-left">
                  <p>✓ Khái niệm về Đảng và vai trò lãnh đạo</p>
                  <p>✓ Nguyên tắc "của dân, do dân, vì dân"</p>
                  <p>✓ Kiểm soát quyền lực nhà nước</p>
                  <p>✓ Chống tham nhũng, lãng phí, quan liêu</p>
                  <p>✓ Xây dựng Đảng và cán bộ</p>
                  <p>✓ Mối quan hệ Đảng - Nhà nước - Nhân dân</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuizPage;
