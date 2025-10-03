import React from "react";
import { Card, Button, Timeline, Tag, Divider } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  BookOutlined,
  TeamOutlined,
  BuildOutlined,
  CommentOutlined,
  RightOutlined,
  StarOutlined,
  SafetyOutlined,
  EyeOutlined,
  BulbOutlined,
} from "@ant-design/icons";

const TongHopPresentation = () => {
  const sections = [
    {
      id: "intro",
      title: "Giới thiệu tổng quan",
      description: "Tư tưởng Hồ Chí Minh về Đảng và Nhà nước",
      color: "blue",
      icon: <BookOutlined />,
      path: "/nha-nuoc-trong-sach",
    },
    {
      id: "clean-state",
      title: "Nhà nước trong sạch, vững mạnh",
      description: "Kiểm soát quyền lực và phòng chống tiêu cực",
      color: "green",
      icon: <SafetyOutlined />,
      path: "/nha-nuoc-trong-sach",
    },
    {
      id: "application",
      title: "Vận dụng tư tưởng HCM",
      description: "Xây dựng Đảng và Nhà nước hiện nay",
      color: "purple",
      icon: <BuildOutlined />,
      path: "/van-dung-tu-tuong",
    },
    {
      id: "discussion",
      title: "Thảo luận & Phản biện",
      description: "Tham nhũng từ trong Đảng mà ra",
      color: "orange",
      icon: <CommentOutlined />,
      path: "/tham-nhung-thao-luan",
    },
  ];

  const keyPoints = [
    {
      title: "Quyền con người và Pháp luật",
      description: "Pháp luật phải có tính nhân văn, bảo vệ quyền con người",
      icon: "⚖️",
    },
    {
      title: "Kiểm soát quyền lực",
      description: "Nhân dân là chủ thể tối cao, kiểm soát từ hai chiều",
      icon: "👥",
    },
    {
      title: 'Phòng chống "giặc nội xâm"',
      description: "Tham ô, lãng phí, quan liêu nguy hiểm hơn giặc ngoại xâm",
      icon: "🛡️",
    },
    {
      title: "Xây dựng Đảng trong sạch",
      description: "Đường lối đúng đắn, chỉnh đốn thường xuyên",
      icon: "🌟",
    },
    {
      title: "Xây dựng Nhà nước vững mạnh",
      description: "Hoàn thiện pháp luật, đội ngũ cán bộ có năng lực",
      icon: "🏛️",
    },
    {
      title: "Vai trò thế hệ trẻ",
      description: "Học tập, vận dụng tư tưởng HCM trong thực tiễn",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Banner Section - Redesigned */}
        <motion.div
          className="mb-16 mt-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-r from-red-600 via-red-700 to-orange-600"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-0 min-h-[400px] md:min-h-[450px]">
              {/* Left Side - Image */}
              <motion.div
                className="relative h-[400px] md:h-auto overflow-hidden"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url('https://mediabcb.mediatech.vn/upload/image/202405/medium/119322_chu_tich_ho_chi_minh_doc_tuyen_ngon_doc_lap_anh_t_l_05340013.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-red-700/40"></div>
                </div>

                {/* Decorative Stars */}
                <motion.div
                  className="absolute top-6 left-6 text-yellow-300"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.0, duration: 0.5 }}
                >
                  <StarOutlined className="text-5xl drop-shadow-lg" />
                </motion.div>
              </motion.div>

              {/* Right Side - Content */}
              <motion.div
                className="flex flex-col justify-center p-8 md:p-10 lg:p-12 min-h-[400px] md:min-h-[450px]"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {/* Main Title */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="mb-6"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                    Tư tưởng
                    <br />
                    <span className="text-yellow-300">Hồ Chí Minh</span>
                  </h1>
                  <div className="h-1 w-24 bg-yellow-300 rounded-full mb-6"></div>
                  <p className="text-xl md:text-2xl text-orange-100 font-medium leading-relaxed">
                    về Đảng Cộng sản Việt Nam
                    <br />
                    và Nhà nước của dân, do dân, vì dân
                  </p>
                </motion.div>

                {/* Quote Box */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0, duration: 0.6 }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border-l-4 border-yellow-400"
                >
                  <div className="flex items-start gap-3">
                    <div className="text-yellow-500 text-3xl mt-1">"</div>
                    <div className="flex-1">
                      <p className="text-gray-800 text-lg md:text-xl font-semibold italic leading-relaxed">
                        Nhà nước ta là Nhà nước của nhân dân, do nhân dân, vì
                        nhân dân
                      </p>
                      <p className="text-red-600 font-bold mt-3 text-sm md:text-base">
                        — Chủ tịch Hồ Chí Minh
                      </p>
                    </div>
                    <div className="text-yellow-500 text-3xl self-end">"</div>
                  </div>
                </motion.div>

                {/* Chapter Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="mt-6 text-orange-200 text-sm md:text-base"
                >
                  <div className="flex items-center gap-2">
                    <BookOutlined className="text-yellow-300" />
                    <span>
                      Chương 4 - Tư tưởng chính trị về xây dựng Đảng và Nhà nước
                    </span>
                  </div>
                </motion.div>

                {/* Decorative Star */}
                <motion.div
                  className="absolute bottom-6 right-6 text-yellow-300 opacity-30"
                  initial={{ opacity: 0, rotate: 0 }}
                  animate={{ opacity: 0.3, rotate: 360 }}
                  transition={{
                    delay: 1.4,
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 3,
                  }}
                >
                  <StarOutlined className="text-6xl" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={section.path}>
                <Card
                  className="h-full cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-red-300"
                  bodyStyle={{ padding: "24px" }}
                >
                  <div className="text-center">
                    <div className={`text-5xl text-${section.color}-500 mb-4`}>
                      {section.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {section.description}
                    </p>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Points Timeline */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Điểm nổi bật
            </h2>
            <p className="text-lg text-gray-600">
              Những nội dung cốt lõi trong tư tưởng Hồ Chí Minh
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <Timeline
              mode="alternate"
              items={keyPoints.map((point, index) => ({
                dot: (
                  <div className="w-12 h-12 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                    {point.icon}
                  </div>
                ),
                children: (
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-gray-50 p-6 rounded-xl shadow-sm"
                  >
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      {point.title}
                    </h4>
                    <p className="text-gray-600">{point.description}</p>
                  </motion.div>
                ),
              }))}
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-red-100 to-orange-100 border-red-200">
            <div className="text-center">
              <StarOutlined className="text-6xl text-yellow-500 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Bắt đầu khám phá
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Tìm hiểu sâu hơn về tư tưởng Hồ Chí Minh trong việc xây dựng
                Đảng và Nhà nước
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/nha-nuoc-trong-sach">
                  <Button
                    type="primary"
                    size="large"
                    icon={<SafetyOutlined />}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 border-0 px-8"
                  >
                    Nhà nước trong sạch
                  </Button>
                </Link>
                <Link to="/van-dung-tu-tuong">
                  <Button
                    type="primary"
                    size="large"
                    icon={<BuildOutlined />}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 border-0 px-8"
                  >
                    Vận dụng tư tưởng
                  </Button>
                </Link>
                <Link to="/tham-nhung-thao-luan">
                  <Button
                    type="primary"
                    size="large"
                    icon={<CommentOutlined />}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 border-0 px-8"
                  >
                    Thảo luận
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </motion.div>

        <Divider />

        {/* Footer Info */}
        <motion.div
          className="text-center text-gray-600 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-sm">
            Đề tài: Chương 4 - Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và
            Nhà nước của dân, do dân, vì dân
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Phần 4.2.3: Nhà nước trong sạch, vững mạnh | Phần 4.3: Vận dụng tư
            tưởng Hồ Chí Minh
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TongHopPresentation;
