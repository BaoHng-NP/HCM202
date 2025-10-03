import React, { useState, useEffect } from "react";
import { Card, Button, Table, message, Modal, Input, Form, Spin } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  ReloadOutlined,
  TrophyOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import Quiz from "../components/Quiz";

// MockAPI endpoint for quiz results
const API_URL = "https://68df99fc898434f413584136.mockapi.io/api/quizResults";

const QuizPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState("hcm_ideology");
  const [quizResults, setQuizResults] = useState([]);
  const [loadingResults, setLoadingResults] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [currentScore, setCurrentScore] = useState(null);
  const [quizStartTime, setQuizStartTime] = useState(null);
  const [quizEndTime, setQuizEndTime] = useState(null);
  const [completionTime, setCompletionTime] = useState(null);
  const [form] = Form.useForm();

  // Fetch quiz results on component mount
  useEffect(() => {
    fetchQuizResults();
    // Set start time when component mounts (user starts quiz)
    setQuizStartTime(new Date().toISOString());
  }, []);

  const fetchQuizResults = async () => {
    setLoadingResults(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Failed to fetch results");

      const data = await response.json();
      // Sort by score descending, then by completion time (fastest first)
      const sortedData = data
        .filter((result) => result.isFinished)
        .sort((a, b) => {
          // First compare scores
          if (b.score !== a.score) return b.score - a.score;
          
          // If scores are equal, compare completion time (shortest first)
          const timeA = a.completionTimeSeconds || Infinity;
          const timeB = b.completionTimeSeconds || Infinity;
          return timeA - timeB;
        });

      setQuizResults(sortedData);
    } catch (error) {
      console.error("Error fetching quiz results:", error);
      message.error("Không thể tải bảng xếp hạng!");
    } finally {
      setLoadingResults(false);
    }
  };

  const formatTime = (seconds) => {
    if (!seconds) return "N/A";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const saveQuizResult = async (score, totalQuestions, isFinished) => {
    if (!playerName.trim()) {
      message.warning("Vui lòng nhập tên của bạn!");
      return;
    }

    try {
      const newResult = {
        playerName: playerName.trim(),
        score: score,
        totalQuestions: totalQuestions,
        isFinished: isFinished,
        startTime: quizStartTime,
        endTime: quizEndTime,
        completionTimeSeconds: completionTime,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newResult),
      });

      if (!response.ok) throw new Error("Failed to save result");

      message.success("Kết quả đã được lưu thành công!");
      setShowResultModal(false);
      setPlayerName("");
      form.resetFields();
      await fetchQuizResults();
      
      // Reset times for next attempt
      setQuizStartTime(new Date().toISOString());
      setQuizEndTime(null);
      setCompletionTime(null);
    } catch (error) {
      console.error("Error saving quiz result:", error);
      message.error("Không thể lưu kết quả. Vui lòng thử lại!");
    }
  };

  const handleQuizComplete = (score, totalQuestions) => {
    // Calculate completion time when quiz completes (before modal shows)
    const endTime = new Date();
    const startTime = new Date(quizStartTime);
    const timeInSeconds = Math.round((endTime - startTime) / 1000);
    
    setQuizEndTime(endTime.toISOString());
    setCompletionTime(timeInSeconds);
    setCurrentScore({ score, totalQuestions });
    setShowResultModal(true);
  };

  const quizzes = {
    hcm_ideology: {
      title: "Tư tưởng Hồ Chí Minh về Đảng và Nhà nước",
      icon: "🏛️",
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

  // Table columns for leaderboard
  const columns = [
    {
      title: "Hạng",
      key: "rank",
      width: 70,
      fixed: "left",
      render: (_, __, index) => (
        <div className="flex items-center justify-center">
          {index === 0 && <span className="text-2xl">🥇</span>}
          {index === 1 && <span className="text-2xl">🥈</span>}
          {index === 2 && <span className="text-2xl">🥉</span>}
          {index > 2 && (
            <span className="font-semibold text-gray-600">#{index + 1}</span>
          )}
        </div>
      ),
    },
    {
      title: "Tên người chơi",
      dataIndex: "playerName",
      key: "playerName",
      width: 150,
      ellipsis: true,
      render: (name) => <span className="font-semibold">{name}</span>,
    },
    {
      title: "Điểm",
      key: "score",
      width: 80,
      render: (_, record) => (
        <span className="font-bold text-green-600">
          {record.score}/{record.totalQuestions}
        </span>
      ),
    },
    {
      title: "Tỷ lệ",
      key: "percentage",
      width: 80,
      render: (_, record) => {
        const percentage = Math.round(
          (record.score / record.totalQuestions) * 100
        );
        return (
          <span
            className={`font-semibold ${
              percentage >= 70
                ? "text-green-600"
                : percentage >= 50
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {percentage}%
          </span>
        );
      },
    },
    {
      title: (
        <div className="flex items-center">
          <ClockCircleOutlined className="mr-1" />
          <span>Thời gian</span>
        </div>
      ),
      key: "completionTime",
      width: 100,
      render: (_, record) => (
        <div className="flex items-center">
          <span className="font-semibold text-blue-600">
            {formatTime(record.completionTimeSeconds)}
          </span>
        </div>
      ),
    },
    {
      title: "Ngày hoàn thành",
      dataIndex: "endTime",
      key: "endTime",
      width: 140,
      render: (time) => (
        <span className="text-gray-600 text-xs">
          {new Date(time).toLocaleString("vi-VN", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      ),
    },
  ];

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="h-full max-w-[1600px] mx-auto px-4 py-6 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <h1 className="text-4xl font-bold text-center mb-3 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
            Kiểm tra tư tưởng Hồ Chí Minh
          </h1>
          <p className="text-center text-gray-600 italic mb-6">
            "Đảng phải là người anh cả thật sự của nhân dân, là công bộc thật
            trung thành của nhân dân"
          </p>
        </motion.div>

        <div className="flex-1 grid lg:grid-cols-12 gap-6 overflow-hidden">
          {/* Left side - Quiz (60% width) */}
          <div className="lg:col-span-7 flex flex-col overflow-hidden">
            {/* Quiz Selection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-shrink-0 mb-4"
            >
              <Card className="shadow-lg">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">🏛️</span>
                  <h3 className="text-lg font-semibold text-red-700">
                    Bộ câu hỏi tư tưởng Hồ Chí Minh
                  </h3>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-3 rounded-lg border border-red-200">
                  <p className="text-gray-700 text-center text-sm">
                    <strong>20 câu hỏi</strong> về tư tưởng Hồ Chí Minh về Đảng
                    Cộng sản Việt Nam và Nhà nước của dân, do dân, vì dân
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Quiz Content */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-red-300 scrollbar-track-gray-100">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedQuiz}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quiz
                    questions={currentQuiz.questions}
                    onComplete={handleQuizComplete}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right side - Leaderboard (40% width) */}
          <div className="lg:col-span-5 flex flex-col overflow-hidden">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="h-full flex flex-col"
            >
              <Card
                className="shadow-lg h-full flex flex-col"
                title={
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <TrophyOutlined className="text-yellow-500 text-xl mr-2" />
                      <span className="font-bold">Bảng xếp hạng</span>
                    </div>
                    <Button
                      type="text"
                      icon={<ReloadOutlined />}
                      onClick={fetchQuizResults}
                      loading={loadingResults}
                      size="small"
                      className="hover:text-red-600"
                    />
                  </div>
                }
                bodyStyle={{
                  padding: "12px",
                  flexGrow: 1,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {loadingResults ? (
                  <div className="flex-1 flex items-center justify-center">
                    <Spin size="large" />
                  </div>
                ) : quizResults.length > 0 ? (
                  <div className="flex-1 overflow-hidden">
                    <Table
                      dataSource={quizResults}
                      columns={columns}
                      rowKey="id"
                      pagination={false}
                      size="small"
                      scroll={{ y: "calc(100vh - 350px)", x: 650 }}
                      className="custom-table"
                    />
                  </div>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
                    <TrophyOutlined className="text-6xl mb-3 opacity-30" />
                    <p className="text-lg font-semibold">Chưa có kết quả nào</p>
                    <p className="text-sm">Hãy là người đầu tiên!</p>
                  </div>
                )}
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Save Result Modal */}
        <Modal
          title={
            <div className="flex items-center">
              <TrophyOutlined className="text-yellow-500 text-2xl mr-2" />
              <span>Hoàn thành Quiz!</span>
            </div>
          }
          open={showResultModal}
          onCancel={null}
          closable={false}
          maskClosable={false}
          keyboard={false}
          footer={null}
          centered
        >
          {currentScore && (
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">
                {currentScore.score >= currentScore.totalQuestions * 0.7
                  ? "🎉"
                  : currentScore.score >= currentScore.totalQuestions * 0.5
                  ? "😊"
                  : "📚"}
              </div>
              <h3 className="text-2xl font-bold mb-2">
                Điểm số: {currentScore.score}/{currentScore.totalQuestions}
              </h3>
              <p className="text-lg text-gray-600 mb-2">
                Tỷ lệ đúng:{" "}
                {Math.round(
                  (currentScore.score / currentScore.totalQuestions) * 100
                )}
                %
              </p>
              {completionTime !== null && (
                <div className="flex items-center justify-center text-blue-600">
                  <ClockCircleOutlined className="mr-2" />
                  <span className="font-semibold text-lg">
                    Thời gian hoàn thành: {formatTime(completionTime)}
                  </span>
                </div>
              )}
            </div>
          )}

          <Form
            form={form}
            onFinish={() =>
              saveQuizResult(
                currentScore.score,
                currentScore.totalQuestions,
                true
              )
            }
            layout="vertical"
          >
            <Form.Item
              label="Nhập tên của bạn để lưu kết quả"
              name="playerName"
              rules={[
                {
                  required: true,
                  message: "Vui lòng nhập tên của bạn!",
                },
                {
                  min: 2,
                  message: "Tên phải có ít nhất 2 ký tự!",
                },
                {
                  max: 50,
                  message: "Tên không được quá 50 ký tự!",
                },
              ]}
            >
              <Input
                placeholder="Tên của bạn"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                size="large"
                autoFocus
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="w-full bg-red-600 hover:bg-red-700"
                size="large"
              >
                Lưu kết quả
              </Button>
            </Form.Item>
          </Form>

          <div className="text-center text-sm text-gray-500 mt-4">
            <strong>Lưu ý:</strong> Bạn phải nhập tên để lưu kết quả
          </div>
        </Modal>
      </div>

      <style jsx>{`
        .custom-table .ant-table-thead > tr > th {
          background-color: #fef2f2;
          font-weight: 600;
          color: #991b1b;
        }
        .custom-table .ant-table-tbody > tr:hover > td {
          background-color: #fff7ed;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f3f4f6;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #fca5a5;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #f87171;
        }
      `}</style>
    </div>
  );
};

export default QuizPage;