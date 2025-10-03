import React from "react";
import { Card, Button, Timeline, Alert, Divider } from "antd";
import { motion } from "framer-motion";
import {
  BuildOutlined,
  TeamOutlined,
  BookOutlined,
  CheckCircleOutlined,
  StarOutlined,
  SafetyOutlined,
  ControlOutlined,
  UserOutlined,
  ExclamationCircleOutlined,
  SettingOutlined,
  HeartOutlined,
  TrophyOutlined,
  FireOutlined,
  EyeOutlined,
  AuditOutlined,
  BankOutlined,
  CrownOutlined,
} from "@ant-design/icons";

const VanDungTuTuongHCM = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Header Section */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-red-600 text-white py-16"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <TeamOutlined className="text-5xl text-blue-100" />
            <BuildOutlined className="text-5xl text-red-100" />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Vận dụng tư tưởng Hồ Chí Minh về xây dựng Đảng và Nhà nước
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Chương 4.3: Xây dựng Đảng thật sự trong sạch, vững mạnh và Nhà nước
            của dân, do dân, vì dân trong thời kỳ mới
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Tư tưởng cơ bản về xây dựng Đảng và Nhà nước */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Tư tưởng Hồ Chí Minh về mối quan hệ Đảng - Nhà nước
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500"
            >
              <TeamOutlined className="text-4xl text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-red-600 mb-3">
                Vai trò của Đảng
              </h3>
              <p className="text-gray-700 mb-4">
                "Đảng phải là người anh cả thật sự của nhân dân, là công bộc
                thật trung thành của nhân dân"
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Lãnh đạo toàn diện của cách mạng</li>
                <li>Đề ra đường lối, chủ trương đúng đắn</li>
                <li>Gương mẫu trong mọi hoạt động</li>
                <li>Kiểm soát quyền lực nhà nước</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500"
            >
              <BuildOutlined className="text-4xl text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-blue-600 mb-3">
                Bản chất Nhà nước
              </h3>
              <p className="text-gray-700 mb-4">
                "Nhà nước ta là của dân, do dân và vì dân"
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Quyền lực từ nhân dân, thuộc về nhân dân</li>
                <li>Thực hiện đường lối của Đảng</li>
                <li>Phục vụ lợi ích nhân dân lao động</li>
                <li>Chịu sự giám sát của nhân dân</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <Alert
              message="Mối quan hệ biện chứng Đảng - Nhà nước"
              description="Sự trong sạch, vững mạnh của Đảng là yếu tố quyết định cho sự thành công của việc xây dựng Nhà nước theo tư tưởng Hồ Chí Minh. Đảng lãnh đạo Nhà nước, Nhà nước thực hiện đường lối của Đảng, cả hai đều phục vụ nhân dân."
              type="info"
              showIcon
              className="border-blue-200"
            />
          </motion.div>
        </motion.section>

        {/* PHẦN 1: XÂY DỰNG ĐẢNG */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-red-700">
            <TeamOutlined className="mr-3" />
            I. Xây dựng Đảng thật sự trong sạch, vững mạnh
          </h2>

          {/* 1. Xây dựng về đường lối */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="border-2 border-red-100 hover:border-red-300 transition-colors">
              <div className="flex items-center mb-4">
                <BookOutlined className="text-3xl text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-red-700">
                  1. Xây dựng về Đường lối
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-2">
                    Nền tảng lý luận
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Dựa trên Chủ nghĩa Mác-Lênin sáng tạo</li>
                    <li>Vận dụng tư tưởng Hồ Chí Minh</li>
                    <li>Phù hợp hoàn cảnh đất nước từng thời kỳ</li>
                    <li>Kế thừa và phát triển</li>
                  </ul>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-700 mb-2">
                    Yêu cầu đường lối
                  </h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                    <li>Đúng đắn, sát thực</li>
                    <li>Được thể chế hóa thành chính sách</li>
                    <li>Có tính khả thi cao</li>
                    <li>Phản ánh nguyện vọng nhân dân</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-red-100 to-pink-100 rounded-lg">
                <p className="text-gray-700 italic text-center">
                  "Đảng phải đề ra đường lối, chủ trương đúng đắn, biến thành
                  hành động tích cực của tất cả các tổ chức trong hệ thống chính
                  trị"
                </p>
              </div>
            </Card>
          </motion.div>

          {/* 2. Tổ chức thực hiện và chỉnh đốn */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
              <div className="flex items-center mb-4">
                <SettingOutlined className="text-3xl text-orange-600 mr-3" />
                <h3 className="text-xl font-semibold text-orange-700">
                  2. Tổ chức thực hiện và Chỉnh đốn Đảng
                </h3>
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg text-center">
                    <CheckCircleOutlined className="text-2xl text-orange-600 mb-2" />
                    <h4 className="font-semibold text-orange-700 mb-1">
                      Thực hiện đường lối
                    </h4>
                    <p className="text-sm text-gray-600">
                      Đường lối phải được thể chế hóa và triển khai hiệu quả
                    </p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg text-center">
                    <FireOutlined className="text-2xl text-yellow-600 mb-2" />
                    <h4 className="font-semibold text-yellow-700 mb-1">
                      Chỉnh đốn thường xuyên
                    </h4>
                    <p className="text-sm text-gray-600">
                      Để Đảng xứng đáng là người cầm quyền
                    </p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    {/* <ShieldOutlined className="text-2xl text-red-600 mb-2" /> */}
                    <h4 className="font-semibold text-red-700 mb-1">
                      Đấu tranh nội bộ
                    </h4>
                    <p className="text-sm text-gray-600">
                      Chống suy thoái, tự diễn biến, tự chuyển hóa
                    </p>
                  </div>
                </div>

                <Alert
                  message="Nhiệm vụ chỉnh đốn Đảng"
                  description="Đấu tranh chống lại các biểu hiện 'suy thoái về tư tưởng chính trị, đạo đức, lối sống', 'tự diễn biến', 'tự chuyển hóa' trong nội bộ Đảng"
                  type="warning"
                  showIcon
                />
              </div>
            </Card>
          </motion.div>

          {/* 3. Xây dựng cán bộ đảng viên */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
              <div className="flex items-center mb-4">
                <UserOutlined className="text-3xl text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-green-700">
                  3. Xây dựng đội ngũ Cán bộ, Đảng viên
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2">
                      Vai trò Đảng viên
                    </h4>
                    <p className="text-gray-700 text-sm mb-2">
                      "Đảng viên phải luôn xứng đáng vừa là người lãnh đạo vừa
                      là người đày tớ thật trung thành của nhân dân"
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Gương mẫu trong mọi việc</li>
                      <li>Thống nhất giữa nói và làm</li>
                      <li>Gần gũi với nhân dân</li>
                      <li>Đấu tranh chống tiêu cực</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">
                      Yêu cầu đặc biệt
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>
                        Cán bộ chiến lược phải nêu cao trách nhiệm gương mẫu
                      </li>
                      <li>
                        Quán triệt sâu sắc tư tưởng và hành động của Hồ Chí Minh
                      </li>
                      <li>Thống nhất giữa lời nói và việc làm</li>
                      <li>Luôn đặt lợi ích nhân dân lên hàng đầu</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                <h4 className="font-semibold text-center mb-2">
                  Tiêu chuẩn "Cần, Kiệm, Liêm, Chính"
                </h4>
                <div className="grid grid-cols-4 gap-2 text-center text-sm">
                  <div className="bg-white p-2 rounded">
                    <HeartOutlined className="text-red-500 mb-1" />
                    <div className="font-semibold">Cần</div>
                    <div className="text-gray-600">Siêng năng, tận tụy</div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <SafetyOutlined className="text-blue-500 mb-1" />
                    <div className="font-semibold">Kiệm</div>
                    <div className="text-gray-600">Tiết kiệm, giản dị</div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <CheckCircleOutlined className="text-green-500 mb-1" />
                    <div className="font-semibold">Liêm</div>
                    <div className="text-gray-600">
                      Trong sạch, không tham nhũng
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded">
                    <StarOutlined className="text-yellow-500 mb-1" />
                    <div className="font-semibold">Chính</div>
                    <div className="text-gray-600">Ngay thẳng, công bằng</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.section>

        {/* PHẦN 2: XÂY DỰNG NHÀ NƯỚC */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
            <BuildOutlined className="mr-3" />
            II. Xây dựng Nhà nước của dân, do dân, vì dân
          </h2>

          {/* 1. Mục tiêu và Pháp luật */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <div className="flex items-center mb-4">
                <TrophyOutlined className="text-3xl text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-blue-700">
                  1. Mục tiêu và Hoàn thiện Pháp luật
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    Mục tiêu xây dựng Nhà nước
                  </h4>
                  <p className="text-gray-700 mb-3">
                    "Xây dựng Nhà nước thật sự trong sạch, vững mạnh của dân, do
                    dân, vì dân"
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <UserOutlined className="text-2xl text-blue-600 mb-2" />
                      <h5 className="font-semibold">Của dân</h5>
                      <p className="text-sm text-gray-600">
                        Quyền lực thuộc về nhân dân
                      </p>
                    </div>
                    <div className="text-center">
                      <TeamOutlined className="text-2xl text-green-600 mb-2" />
                      <h5 className="font-semibold">Do dân</h5>
                      <p className="text-sm text-gray-600">
                        Nhân dân tham gia quản lý
                      </p>
                    </div>
                    <div className="text-center">
                      <HeartOutlined className="text-2xl text-red-600 mb-2" />
                      <h5 className="font-semibold">Vì dân</h5>
                      <p className="text-sm text-gray-600">
                        Phục vụ lợi ích nhân dân
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-700 mb-2">
                    Hoàn thiện hệ thống pháp luật
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Đẩy mạnh việc hoàn thiện pháp luật</li>
                      <li>Tăng cường tổ chức thi hành pháp luật</li>
                      <li>Nâng cao hiệu lực, hiệu quả Nhà nước</li>
                      <li>Quản lý đất nước theo pháp luật</li>
                    </ul>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Tôn trọng, bảo đảm quyền con người</li>
                      <li>Bảo vệ quyền và nghĩa vụ công dân</li>
                      <li>Xây dựng nền tảng đạo đức xã hội</li>
                      <li>Đảm bảo công bằng, minh bạch</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 2. Cơ chế kiểm soát quyền lực */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
              <div className="flex items-center mb-4">
                <ControlOutlined className="text-3xl text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold text-purple-700">
                  2. Cơ chế Kiểm soát Quyền lực và Tổ chức
                </h3>
              </div>

              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-3">
                    Phân quyền và kiểm soát quyền lực
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                      <BankOutlined className="text-2xl text-blue-600 mb-2" />
                      <h5 className="font-semibold text-blue-700">
                        Quyền lập pháp
                      </h5>
                      <p className="text-sm text-gray-600">
                        Quốc hội - cơ quan quyền lực nhà nước cao nhất
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-green-400">
                      <SettingOutlined className="text-2xl text-green-600 mb-2" />
                      <h5 className="font-semibold text-green-700">
                        Quyền hành pháp
                      </h5>
                      <p className="text-sm text-gray-600">
                        Chính phủ thực hiện quyền hành pháp
                      </p>
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-orange-400">
                      <AuditOutlined className="text-2xl text-orange-600 mb-2" />
                      <h5 className="font-semibold text-orange-700">
                        Quyền tư pháp
                      </h5>
                      <p className="text-sm text-gray-600">
                        Tòa án thực hiện quyền tư pháp
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-indigo-700 mb-2">
                      Cơ chế phân công, phối hợp
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>
                        Xác định rõ cơ chế phân công, phối hợp thực thi quyền
                        lực
                      </li>
                      <li>Cơ chế kiểm soát quyền lực giữa các cơ quan</li>
                      <li>Phân định thẩm quyền Trung ương - địa phương</li>
                      <li>Xác định trách nhiệm người đứng đầu</li>
                    </ul>
                  </div>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-teal-700 mb-2">
                      Đổi mới và kiểm soát
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                      <li>Tăng cường chế độ tuyển chọn, đánh giá</li>
                      <li>Kiểm tra, giám sát công việc</li>
                      <li>Trách nhiệm người đứng đầu cơ quan</li>
                      <li>Minh bạch trong hoạt động</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 3. Xây dựng đội ngũ cán bộ và phòng chống tiêu cực */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
              <div className="flex items-center mb-4">
                <SafetyOutlined className="text-3xl text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-green-700">
                  3. Xây dựng Đội ngũ Cán bộ và Phòng chống Tiêu cực
                </h3>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-3">
                      Tiêu chuẩn cán bộ, công chức
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <CrownOutlined className="text-yellow-600 mr-2" />
                        <span className="text-sm text-gray-700">
                          Bản lĩnh chính trị vững vàng
                        </span>
                      </div>
                      <div className="flex items-center">
                        <HeartOutlined className="text-red-600 mr-2" />
                        <span className="text-sm text-gray-700">
                          Phẩm chất đạo đức trong sáng
                        </span>
                      </div>
                      <div className="flex items-center">
                        <BookOutlined className="text-blue-600 mr-2" />
                        <span className="text-sm text-gray-700">
                          Trình độ, năng lực chuyên môn phù hợp
                        </span>
                      </div>
                      <div className="flex items-center">
                        <UserOutlined className="text-green-600 mr-2" />
                        <span className="text-sm text-gray-700">
                          Gần gũi với nhân dân
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-700 mb-3">
                      Đấu tranh phòng chống tiêu cực
                    </h4>
                    <p className="text-gray-700 text-sm mb-3 italic">
                      "Phải đẩy mạnh hơn nữa cuộc đấu tranh phòng, chống tham
                      nhũng, lãng phí, quan liêu, hách dịch, cửa quyền"
                    </p>
                    <div className="space-y-2">
                      <Alert
                        message="Tham nhũng - Giặc nội xâm nguy hiểm"
                        type="error"
                        size="small"
                      />
                      <Alert
                        message="Lãng phí - Căn bệnh cần tiết kiệm"
                        type="warning"
                        size="small"
                      />
                      <Alert
                        message="Quan liêu - Gốc rễ của mọi tiêu cực"
                        type="warning"
                        size="small"
                      />
                      <Alert
                        message="Hách dịch, cửa quyền - Mất lòng dân"
                        type="error"
                        size="small"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-700 mb-2 text-center">
                    Nguyên tắc "Không có vùng cấm, không có ngoại lệ"
                  </h4>
                  <p className="text-center text-gray-700 text-sm">
                    Trong đấu tranh phòng chống tham nhũng, mọi cán bộ từ cấp
                    cao đến cơ sở đều phải tuân thủ pháp luật và chịu sự giám
                    sát
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* 4. Tăng cường sự lãnh đạo của Đảng */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-red-100 hover:border-red-300 transition-colors">
              <div className="flex items-center mb-4">
                <TeamOutlined className="text-3xl text-red-600 mr-3" />
                <h3 className="text-xl font-semibold text-red-700">
                  4. Tăng cường sự Lãnh đạo của Đảng đối với Nhà nước
                </h3>
              </div>

              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-700 mb-3">
                    Đổi mới phương thức lãnh đạo
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">
                        Lãnh đạo bằng:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Các chủ trương, chính sách lớn</li>
                        <li>Thể chế hóa đường lối thành pháp luật</li>
                        <li>Lãnh đạo chiến lược, không can thiệp trực tiếp</li>
                        <li>Giám sát việc thực hiện</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-700 mb-2">
                        Yêu cầu:
                      </h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm">
                        <li>Đảng viên gương mẫu tuân thủ pháp luật</li>
                        <li>Tổ chức Đảng hoạt động theo pháp luật</li>
                        <li>Không lợi dụng quyền lực cho lợi ích cá nhân</li>
                        <li>Chịu sự giám sát của nhân dân</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-100 to-blue-100 p-4 rounded-lg">
                  <p className="text-center text-gray-700 font-semibold">
                    "Sự trong sạch, vững mạnh của Đảng là yếu tố quyết định cho
                    sự thành công của việc xây dựng Nhà nước theo tư tưởng Hồ
                    Chí Minh"
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.section>

        {/* Thách thức và nhiệm vụ hiện tại */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-orange-700">
            <ExclamationCircleOutlined className="mr-3" />
            Thách thức và Nhiệm vụ trong thời kỳ mới
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-l-4 border-orange-500">
                <h3 className="text-xl font-semibold mb-4 text-orange-700">
                  <FireOutlined className="mr-2" />
                  Thách thức cần vượt qua
                </h3>
                <div className="space-y-3">
                  <Alert
                    message="Tham nhũng, tiêu cực trong Đảng và Nhà nước"
                    description="Tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống"
                    type="error"
                    showIcon
                  />
                  <Alert
                    message="Năng lực lãnh đạo, quản lý"
                    description="Chưa đáp ứng yêu cầu phát triển của đất nước"
                    type="warning"
                    showIcon
                  />
                  <Alert
                    message="Liên hệ với nhân dân"
                    description="Một số cán bộ còn xa rời thực tiế, xa rời nhân dân"
                    type="warning"
                    showIcon
                  />
                  <Alert
                    message="Cơ chế, thể chế"
                    description="Cần tiếp tục hoàn thiện để phù hợp với thực tiễn"
                    type="info"
                    showIcon
                  />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-l-4 border-green-500">
                <h3 className="text-xl font-semibold mb-4 text-green-700">
                  <TrophyOutlined className="mr-2" />
                  Nhiệm vụ trọng tâm
                </h3>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg border-l-2 border-green-400">
                    <h4 className="font-semibold text-green-700">
                      Đổi mới phương thức lãnh đạo
                    </h4>
                    <p className="text-sm text-gray-600">
                      Từ lãnh đạo trực tiếp sang lãnh đạo chiến lược, thể chế
                      hóa
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg border-l-2 border-blue-400">
                    <h4 className="font-semibold text-blue-700">
                      Cải cách hành chính
                    </h4>
                    <p className="text-sm text-gray-600">
                      Xây dựng chính phủ điện tử, giảm thủ tục hành chính
                    </p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg border-l-2 border-purple-400">
                    <h4 className="font-semibold text-purple-700">
                      Đấu tranh phòng chống tham nhũng
                    </h4>
                    <p className="text-sm text-gray-600">
                      Không có vùng cấm, không có ngoại lệ trong đấu tranh
                    </p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg border-l-2 border-orange-400">
                    <h4 className="font-semibold text-orange-700">
                      Xây dựng đội ngũ cán bộ
                    </h4>
                    <p className="text-sm text-gray-600">
                      Đức và tài, hồng và chuyên, vừa có bản lĩnh vừa có năng
                      lực
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Kết luận tổng hợp */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.4 }}
          viewport={{ once: true }}
          className="text-center py-8"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-red-600 text-white border-0">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Kết luận: Vận dụng tư tưởng Hồ Chí Minh trong thời kỳ mới
              </h3>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Về xây dựng Đảng:</h4>
                  <ul className="text-blue-100 text-sm space-y-1">
                    <li>• Đường lối đúng đắn, sát thực</li>
                    <li>• Tổ chức vững mạnh, kỷ luật nghiêm</li>
                    <li>• Cán bộ gương mẫu "Cần, Kiệm, Liêm, Chính"</li>
                    <li>• Chỉnh đốn thường xuyên</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Về xây dựng Nhà nước:</h4>
                  <ul className="text-blue-100 text-sm space-y-1">
                    <li>• Hoàn thiện pháp luật, tăng hiệu quả</li>
                    <li>• Kiểm soát quyền lực hiệu quả</li>
                    <li>• Cán bộ có đức, có tài</li>
                    <li>• Phòng chống tham nhũng quyết liệt</li>
                  </ul>
                </div>
              </div>

              <p className="text-lg text-blue-100">
                Xây dựng Đảng thật sự trong sạch, vững mạnh và Nhà nước của dân,
                do dân, vì dân là nhiệm vụ then chốt, quyết định sự thành công
                của sự nghiệp đổi mới đất nước, góp phần hiện thực hóa khát vọng
                dân tộc và lý tưởng của Hồ Chí Minh.
              </p>

              <Divider style={{ borderColor: "rgba(255,255,255,0.3)" }} />

              <div className="flex justify-center space-x-4">
                <Button
                  type="primary"
                  size="large"
                  className="bg-white text-blue-600 border-white hover:bg-blue-50"
                >
                  Học tập sâu
                </Button>
                <Button
                  size="large"
                  className="border-white text-white hover:border-blue-300 hover:text-blue-100"
                >
                  Vận dụng thực tiễn
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default VanDungTuTuongHCM;
