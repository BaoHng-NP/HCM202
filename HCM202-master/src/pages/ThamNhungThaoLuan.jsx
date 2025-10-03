import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  Alert,
  Avatar,
  Input,
  Form,
  Modal,
  Badge,
  message,
  Spin,
} from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  CommentOutlined,
  QuestionCircleOutlined,
  ExclamationCircleOutlined,
  UserOutlined,
  SendOutlined,
  HeartOutlined,
  TeamOutlined,
  SolutionOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;

// MockAPI endpoint
const API_URL = "https://68df99fc898434f413584136.mockapi.io/api/answer";

const ThamNhungThaoLuan = () => {
  const [currentView, setCurrentView] = useState("quote");
  const [comments, setComments] = useState([]);
  const [commentForm] = Form.useForm();
  const [isCommentModalVisible, setIsCommentModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetchingComments, setFetchingComments] = useState(false);

  // Fetch all comments from MockAPI on component mount
  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setFetchingComments(true);
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch comments");
      }
      const data = await response.json();

      // Sort by time (newest first)
      const sortedComments = data.sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      );

      setComments(sortedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
      message.error("Không thể tải các câu trả lời. Vui lòng thử lại!");
    } finally {
      setFetchingComments(false);
    }
  };

  const handleAddComment = async (values) => {
    setLoading(true);
    try {
      const newComment = {
        answer: values.comment,
        time: new Date().toISOString(),
        author: values.name || "Sinh viên",
        question: values.question || "Chung",
        likes: 0,
      };

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error("Failed to post comment");
      }

      const savedComment = await response.json();

      message.success("Ý kiến của bạn đã được đăng thành công!");
      commentForm.resetFields();
      setIsCommentModalVisible(false);

      // Refresh comments list
      await fetchComments();
    } catch (error) {
      console.error("Error adding comment:", error);
      message.error("Có lỗi xảy ra. Vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  const views = [
    {
      id: "quote",
      title: "Phát biểu của ĐB Dương Trung Quốc",
      subtitle: "Tham nhũng từ trong Đảng mà ra",
    },
    {
      id: "analysis",
      title: "Phân tích thách thức",
      subtitle: "Ý nghĩa và tác động",
    },
    {
      id: "discussion",
      title: "Câu hỏi thảo luận",
      subtitle: "Suy ngẫm và tranh luận",
    },
    {
      id: "solutions",
      title: "Giải pháp ứng dụng",
      subtitle: "Vận dụng tư tưởng HCM",
    },
  ];

  const discussionQuestions = [
    {
      question:
        "Điều này đặt ra thách thức gì với việc xây dựng Đảng và Nhà nước hiện nay?",
      category: "Thách thức",
      icon: <ExclamationCircleOutlined className="text-red-500" />,
      suggestions: [
        "Cần tăng cường kiểm soát nội bộ trong Đảng",
        "Xây dựng cơ chế tự thanh lọc từ bên trong",
        "Nâng cao ý thức trách nhiệm của đảng viên",
      ],
    },
    {
      question:
        "Nếu tham nhũng xuất phát từ nội bộ, cơ chế kiểm soát nào là hiệu quả nhất?",
      category: "Cơ chế",
      icon: <SolutionOutlined className="text-blue-500" />,
      suggestions: [
        "Kiểm soát quyền lực từ trên xuống và từ dưới lên",
        "Tăng cường vai trò giám sát của nhân dân",
        "Xây dựng hệ thống pháp luật nghiêm minh",
      ],
    },
    {
      question:
        "Sinh viên, thế hệ trẻ cần làm gì để góp phần xây dựng Đảng trong sạch, vững mạnh?",
      category: "Hành động",
      icon: <BulbOutlined className="text-green-500" />,
      suggestions: [
        "Học tập và vận dụng tư tưởng Hồ Chí Minh",
        "Tham gia giám sát xã hội tích cực",
        "Nêu cao tinh thần yêu nước, trách nhiệm công dân",
      ],
    },
  ];

  const getCurrentContent = () => {
    switch (currentView) {
      case "quote":
        return (
          <div className="space-y-8">
            {/* Quote Section */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-red-100 to-orange-100 p-8 rounded-2xl shadow-lg border-l-8 border-red-500">
                <CommentOutlined className="text-6xl text-red-500 mb-6" />
                <blockquote className="text-3xl md:text-4xl font-bold text-gray-800 italic leading-relaxed mb-6">
                  "Tham nhũng là từ trong Đảng mà ra..."
                </blockquote>
                <footer className="text-xl text-red-600 font-semibold">
                  — Đại biểu Dương Trung Quốc
                </footer>
                <p className="text-gray-600 mt-4">
                  Phát biểu trên nghị trường Quốc hội
                </p>
              </div>
            </motion.div>

            {/* Context */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card
                title={
                  <div className="flex items-center">
                    <QuestionCircleOutlined className="text-blue-500 mr-2" />
                    <span>Bối cảnh và ý nghĩa</span>
                  </div>
                }
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      Quan điểm của Hồ Chí Minh:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                        Tham ô là "giặc nội xâm"
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                        Nguy hiểm hơn giặc ngoại xâm
                      </li>
                      <li className="flex items-start">
                        <CheckCircleOutlined className="text-green-500 mt-1 mr-2" />
                        Cần phòng chống quyết liệt
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-800 mb-3">
                      Thực tế hiện nay:
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <ExclamationCircleOutlined className="text-orange-500 mt-1 mr-2" />
                        Tham nhũng xuất phát từ nội bộ Đảng
                      </li>
                      <li className="flex items-start">
                        <ExclamationCircleOutlined className="text-orange-500 mt-1 mr-2" />
                        Ảnh hưởng đến uy tín của Đảng
                      </li>
                      <li className="flex items-start">
                        <ExclamationCircleOutlined className="text-orange-500 mt-1 mr-2" />
                        Cần giải pháp căn cơ
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        );

      case "analysis":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <ExclamationCircleOutlined className="text-8xl text-orange-500 mb-6" />
              <h3 className="text-3xl font-bold text-orange-600 mb-4">
                Thách thức đặt ra
              </h3>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Thách thức với Đảng */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  title={
                    <div className="flex items-center">
                      <TeamOutlined className="text-red-500 mr-2" />
                      <span>Với việc xây dựng Đảng</span>
                    </div>
                  }
                  className="h-full"
                >
                  <div className="space-y-4">
                    <Alert
                      message="Tự thanh lọc nội bộ"
                      description="Đảng phải có khả năng tự phát hiện và xử lý những yếu tố tiêu cực từ bên trong"
                      type="error"
                      showIcon
                    />

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h5 className="font-bold text-red-600 mb-2">
                        Các vấn đề cần giải quyết:
                      </h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Tăng cường giáo dục chính trị cho đảng viên</li>
                        <li>• Xây dựng cơ chế kiểm soát chặt chẽ</li>
                        <li>• Nâng cao ý thức trách nhiệm cá nhân</li>
                        <li>• Tạo văn hóa trong sạch, minh bạch</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Thách thức với Nhà nước */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card
                  title={
                    <div className="flex items-center">
                      <SolutionOutlined className="text-blue-500 mr-2" />
                      <span>Với việc xây dựng Nhà nước</span>
                    </div>
                  }
                  className="h-full"
                >
                  <div className="space-y-4">
                    <Alert
                      message="Kiểm soát quyền lực"
                      description="Cần hoàn thiện cơ chế kiểm soát quyền lực từ nhiều phía để ngăn chặn tham nhũng"
                      type="warning"
                      showIcon
                    />

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-600 mb-2">
                        Giải pháp cần thực hiện:
                      </h5>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Hoàn thiện hệ thống pháp luật</li>
                        <li>• Tăng cường giám sát của nhân dân</li>
                        <li>• Minh bạch hóa hoạt động công quyền</li>
                        <li>• Xử lý nghiêm minh các vi phạm</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Mối quan hệ Đảng - Nhà nước */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-purple-600">
                    Mối quan hệ Đảng - Nhà nước
                  </h4>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🔄</div>
                    <h5 className="font-bold text-purple-600">Tương tác</h5>
                    <p className="text-sm text-gray-600">
                      Đảng lãnh đạo, Nhà nước thi hành
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">⚖️</div>
                    <h5 className="font-bold text-blue-600">Kiểm soát</h5>
                    <p className="text-sm text-gray-600">
                      Nhà nước kiểm soát quyền lực
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <h5 className="font-bold text-green-600">Mục tiêu</h5>
                    <p className="text-sm text-gray-600">Phục vụ nhân dân</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        );

      case "discussion":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <QuestionCircleOutlined className="text-8xl text-green-500 mb-6" />
              <h3 className="text-3xl font-bold text-green-600 mb-4">
                Câu hỏi thảo luận
              </h3>
              <p className="text-lg text-gray-600">
                Hãy suy ngẫm và chia sẻ quan điểm của bạn
              </p>
            </motion.div>

            <div className="space-y-6">
              {discussionQuestions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        {item.icon}
                        <Badge
                          count={item.category}
                          style={{ backgroundColor: "#52c41a" }}
                          className="mt-2"
                        />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-800 mb-4">
                          {item.question}
                        </h4>

                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h5 className="font-semibold text-gray-700 mb-2">
                            Gợi ý thảo luận:
                          </h5>
                          <ul className="space-y-1">
                            {item.suggestions.map((suggestion, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-gray-600"
                              >
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <Button
                          type="primary"
                          icon={<CommentOutlined />}
                          className="mt-4"
                          onClick={() => setIsCommentModalVisible(true)}
                        >
                          Chia sẻ ý kiến
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Comments Section - UPDATED with MockAPI */}
            {fetchingComments ? (
              <div className="text-center py-12">
                <Spin
                  indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
                />
                <p className="text-gray-500 mt-4">Đang tải câu trả lời...</p>
              </div>
            ) : comments.length > 0 ? (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Card
                  title={
                    <div className="flex items-center justify-between">
                      <span>Ý kiến sinh viên</span>
                      <Badge
                        count={comments.length}
                        style={{ backgroundColor: "#52c41a" }}
                        showZero
                      />
                    </div>
                  }
                >
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        <Avatar
                          icon={<UserOutlined />}
                          className="bg-blue-500"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-semibold text-gray-800">
                              {comment.author || "Sinh viên"}
                            </span>
                            <span className="text-gray-500 text-sm">
                              {new Date(comment.time).toLocaleString("vi-VN")}
                            </span>
                            {comment.question && (
                              <Badge
                                count={comment.question}
                                style={{ backgroundColor: "#f59e0b" }}
                              />
                            )}
                          </div>
                          <p className="text-gray-700 mb-2">{comment.answer}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <HeartOutlined className="text-red-400" />
                              <span>{comment.likes || 0}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ) : (
              <Alert
                message="Chưa có ý kiến nào"
                description="Hãy là người đầu tiên chia sẻ suy nghĩ của bạn!"
                type="info"
                showIcon
              />
            )}
          </div>
        );

      case "solutions":
        return (
          <div className="space-y-8">
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <BulbOutlined className="text-8xl text-yellow-500 mb-6" />
              <h3 className="text-3xl font-bold text-yellow-600 mb-4">
                Giải pháp ứng dụng
              </h3>
              <p className="text-lg text-gray-600">
                Vận dụng tư tưởng Hồ Chí Minh vào thực tiễn
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Giải pháp ngắn hạn */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card
                  title="Giải pháp ngắn hạn"
                  className="h-full"
                  headStyle={{ backgroundColor: "#fef3c7", color: "#92400e" }}
                >
                  <div className="space-y-4">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h5 className="font-bold text-yellow-600 mb-2">
                        🎯 Tăng cường kiểm soát
                      </h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Kiểm tra, giám sát chặt chẽ hơn</li>
                        <li>• Xử lý kịp thời các vi phạm</li>
                        <li>• Công khai minh bạch thông tin</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-bold text-orange-600 mb-2">
                        📚 Giáo dục chính trị
                      </h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Học tập tư tưởng Hồ Chí Minh</li>
                        <li>• Rèn luyện đạo đức cách mạng</li>
                        <li>• Nâng cao ý thức trách nhiệm</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Giải pháp dài hạn */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card
                  title="Giải pháp dài hạn"
                  className="h-full"
                  headStyle={{ backgroundColor: "#dcfdf4", color: "#065f46" }}
                >
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-bold text-green-600 mb-2">
                        🏗️ Xây dựng thể chế
                      </h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Hoàn thiện hệ thống pháp luật</li>
                        <li>• Cải cách cơ chế quản lý</li>
                        <li>• Hiện đại hóa bộ máy hành chính</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-bold text-blue-600 mb-2">
                        👥 Xây dựng văn hóa
                      </h5>
                      <ul className="space-y-1 text-gray-700 text-sm">
                        <li>• Văn hóa trong sạch, minh bạch</li>
                        <li>• Tinh thần phục vụ nhân dân</li>
                        <li>• Truyền thống cách mạng</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Vai trò của thế hệ trẻ */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="text-center mb-6">
                  <UserOutlined className="text-4xl text-indigo-500 mb-2" />
                  <h4 className="text-2xl font-bold text-indigo-600">
                    Vai trò của sinh viên, thế hệ trẻ
                  </h4>
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">📖</div>
                    <h5 className="font-bold text-indigo-600 mb-1">Học tập</h5>
                    <p className="text-xs text-gray-600">
                      Nghiên cứu tư tưởng HCM
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">👀</div>
                    <h5 className="font-bold text-blue-600 mb-1">Giám sát</h5>
                    <p className="text-xs text-gray-600">
                      Tham gia giám sát xã hội
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🌟</div>
                    <h5 className="font-bold text-green-600 mb-1">Gương mẫu</h5>
                    <p className="text-xs text-gray-600">
                      Làm gương trong học tập
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <div className="text-3xl mb-2">🚀</div>
                    <h5 className="font-bold text-purple-600 mb-1">Đóng góp</h5>
                    <p className="text-xs text-gray-600">Xây dựng đất nước</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Navigation */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600 mb-8">
            Thảo luận & Phản biện
          </h1>

          {/* Tab Navigation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-4xl mx-auto mb-6">
            {views.map((view) => (
              <button
                key={view.id}
                onClick={() => setCurrentView(view.id)}
                className={`p-4 rounded-lg transition-all duration-300 ${
                  currentView === view.id
                    ? "bg-orange-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-orange-100 hover:shadow-md"
                }`}
              >
                <h3 className="font-bold text-sm">{view.title}</h3>
                <p className="text-xs opacity-80">{view.subtitle}</p>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              {getCurrentContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Comment Modal */}
        <Modal
          title="Chia sẻ ý kiến của bạn"
          open={isCommentModalVisible}
          onCancel={() => setIsCommentModalVisible(false)}
          footer={null}
        >
          <Form
            form={commentForm}
            onFinish={handleAddComment}
            layout="vertical"
          >
            <Form.Item
              name="name"
              label="Tên của bạn"
              rules={[{ required: true, message: "Vui lòng nhập tên!" }]}
            >
              <Input placeholder="Nhập tên của bạn" />
            </Form.Item>

            <Form.Item name="question" label="Câu hỏi liên quan">
              <Input placeholder="Câu hỏi nào bạn muốn thảo luận?" />
            </Form.Item>

            <Form.Item
              name="comment"
              label="Ý kiến của bạn"
              rules={[{ required: true, message: "Vui lòng nhập ý kiến!" }]}
            >
              <TextArea
                rows={4}
                placeholder="Chia sẻ suy nghĩ và quan điểm của bạn..."
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
                className="w-full"
                loading={loading}
              >
                Gửi ý kiến
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default ThamNhungThaoLuan;
