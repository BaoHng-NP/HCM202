import React from "react";
import { Card, Button, Badge, Alert, Timeline } from "antd";
import { motion } from "framer-motion";
import {
  EyeOutlined,
  UserOutlined,
  TeamOutlined,
  SafetyOutlined,
  WarningOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const NhaNotronSachVungManh = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Header Section */}
      <motion.div
        className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <EyeOutlined className="text-5xl mb-4 text-red-100" />
          <h1 className="text-4xl font-bold mb-4">
            Nhà nước trong sạch, vững mạnh - Theo tư tưởng Hồ Chí Minh
          </h1>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Xây dựng và hoàn thiện Nhà nước theo tinh thần "Của dân, do dân, vì
            dân"
          </p>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Bản chất nhà nước */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-red-700">
            <UserOutlined className="mr-3" />
            Bản chất Nhà nước theo Hồ Chí Minh
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card
                className="h-full border-2 border-blue-100 hover:border-blue-300 transition-colors"
                bodyStyle={{ padding: "24px", textAlign: "center" }}
              >
                <UserOutlined className="text-4xl text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Của dân</h3>
                <p className="text-gray-600">
                  Nhà nước thuộc về nhân dân, do nhân dân sở hữu và quyết định
                </p>
                <Alert
                  message="Nhà nước là tài sản chung của toàn dân"
                  type="info"
                  className="mt-4"
                  showIcon={false}
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card
                className="h-full border-2 border-green-100 hover:border-green-300 transition-colors"
                bodyStyle={{ padding: "24px", textAlign: "center" }}
              >
                <TeamOutlined className="text-4xl text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Do dân</h3>
                <p className="text-gray-600">
                  Quyền lực nhà nước do nhân dân thực hiện thông qua đại diện
                  được bầu chọn
                </p>
                <Alert
                  message="Dân chủ là nền tảng của quyền lực"
                  type="success"
                  className="mt-4"
                  showIcon={false}
                />
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card
                className="h-full border-2 border-yellow-100 hover:border-yellow-300 transition-colors"
                bodyStyle={{ padding: "24px", textAlign: "center" }}
              >
                <SafetyOutlined className="text-4xl text-yellow-600 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Vì dân</h3>
                <p className="text-gray-600">
                  Mọi hoạt động của nhà nước phải hướng về lợi ích của nhân dân
                </p>
                <Alert
                  message="Phục vụ nhân dân là mục tiêu cao nhất"
                  type="warning"
                  className="mt-4"
                  showIcon={false}
                />
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Kiểm soát quyền lực nhà nước */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
            <SafetyOutlined className="mr-3" />
            Kiểm soát quyền lực nhà nước
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Card className="border-l-4 border-blue-500">
                <h3 className="text-xl font-semibold mb-4 text-blue-700">
                  Tính tất yếu của kiểm soát quyền lực
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 italic text-lg leading-relaxed">
                    "Quyền lực là do nhân dân ủy thác cho Nhà nước. Nhưng nếu
                    không kiểm soát quyền lực, cơ quan nhà nước hay cán bộ nhà
                    nước đều có thể trở nên lạm quyền."
                  </p>
                  <p className="text-sm text-gray-600 mt-3">
                    - Quan điểm của Hồ Chí Minh
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">
                      Chủ thể kiểm soát:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          <strong>Nhân dân:</strong> Chủ thể tối cao của quyền
                          lực nhà nước
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          <strong>Đảng:</strong> Có quyền và trách nhiệm kiểm
                          soát quyền lực Nhà nước
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">
                      Cơ chế kiểm soát:
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          Phân công, phân nhiệm giữa các cơ quan
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">
                          Kiểm soát giữa lập pháp, hành pháp, tư pháp
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <Alert
                message="Tầm quan trọng của kiểm soát quyền lực"
                description={
                  <div className="mt-2">
                    <p className="text-gray-700">
                      "Phải tổ chức sự kiểm soát, mà muốn kiểm soát đúng thì
                      cũng phải có quần chúng giúp đỡ" - Hồ Chí Minh nhấn mạnh
                      vai trò của nhân dân trong việc giám sát quyền lực nhà
                      nước.
                    </p>
                  </div>
                }
                type="info"
                showIcon
                className="border-blue-200"
              />
            </motion.div>
          </div>
        </motion.section>

        {/* Phòng chống tiêu cực - "Giặc nội xâm" */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-red-700">
            <WarningOutlined className="mr-3" />
            Phòng chống tiêu cực trong Nhà nước - "Giặc nội xâm"
          </h2>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <div className="text-center mb-8">
                <div className="bg-red-100 p-6 rounded-xl border-l-4 border-red-500 max-w-4xl mx-auto">
                  <p className="text-xl text-gray-800 italic leading-relaxed">
                    "Tham ô, lãng phí, quan liêu là{" "}
                    <strong>giặc nội xâm</strong>, là{" "}
                    <strong>giặc ở trong lòng</strong>, nguy hiểm hơn giặc ngoại
                    xâm"
                  </p>
                  <p className="text-sm text-gray-600 mt-3">
                    - Chủ tịch Hồ Chí Minh
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-l-4 border-red-500">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">💰</div>
                    <h3 className="text-xl font-bold text-red-600">Tham ô</h3>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-700 mb-4 italic">
                      "Lấy của công dùng vào việc tư, quên cả thanh liêm, đạo
                      đức"
                    </p>
                    <h4 className="font-semibold mb-2">Tác hại:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Làm thối rữa quyền lực</li>
                      <li>• Mất lòng tin của nhân dân</li>
                      <li>• Gây bất bình đẳng xã hội</li>
                      <li>• Cản trở sự phát triển</li>
                    </ul>
                  </div>
                </Card>

                <Card className="border-l-4 border-orange-500">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">💸</div>
                    <h3 className="text-xl font-bold text-orange-600">
                      Lãng phí
                    </h3>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-700 mb-4 italic">
                      "Lãng phí là ăn cắp mồ hôi nước mắt của nhân dân"
                    </p>
                    <h4 className="font-semibold mb-2">Tác hại:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Lãng phí tài nguyên quốc gia</li>
                      <li>• Cản trở sự phát triển</li>
                      <li>• Bất công với nhân dân</li>
                      <li>• Giảm hiệu quả đầu tư công</li>
                    </ul>
                  </div>
                </Card>

                <Card className="border-l-4 border-yellow-500">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">📋</div>
                    <h3 className="text-xl font-bold text-yellow-600">
                      Quan liêu
                    </h3>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-700 mb-4 italic">
                      "Không sâu sát, không gần gũi quần chúng, không kiểm tra"
                    </p>
                    <h4 className="font-semibold mb-2">Tác hại:</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Cản trở công tác</li>
                      <li>• Che chở tham ô</li>
                      <li>• Mất liên hệ với dân</li>
                      <li>• Gây khó khăn cho quần chúng</li>
                    </ul>
                  </div>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <Card className="bg-yellow-50 border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold mb-4 text-yellow-700">
                  Các căn bệnh khác cần đấu tranh:
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-yellow-100 rounded-lg">
                    <h4 className="font-semibold text-yellow-700">Tư túng</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Tư duy hạn hẹp, cục bộ
                    </p>
                  </div>
                  <div className="text-center p-4 bg-red-100 rounded-lg">
                    <h4 className="font-semibold text-red-700">Chia rẽ</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Mất đoàn kết nội bộ
                    </p>
                  </div>
                  <div className="text-center p-4 bg-orange-100 rounded-lg">
                    <h4 className="font-semibold text-orange-700">Kiêu ngạo</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Tự cao, xa rời thực tế
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Yêu cầu cán bộ, công chức */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 2.4 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-green-700">
            <UserOutlined className="mr-3" />
            Yêu cầu đối với cán bộ, công chức
          </h2>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              <Alert
                message="Nguyên tắc cơ bản"
                description="Cán bộ, công chức giữ chức vụ càng cao, trách nhiệm càng lớn và cần phải làm trước gương"
                type="success"
                showIcon
                className="mb-6"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.8 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-green-100">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    Đạo đức trong hoạt động công vụ
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-700 mb-2">
                        Liêm chính
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Không tham nhũng, không lạm dụng quyền lực
                      </p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">
                        Công bằng
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Không thiên vị, xử lý công việc khách quan
                      </p>
                    </div>
                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-700 mb-2">
                        Minh bạch
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Quyết định rõ ràng, công khai thông tin
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-2 border-blue-100">
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">
                    Trách nhiệm với nhân dân
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-700 mb-2">
                        Phục vụ nhân dân
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Đặt lợi ích nhân dân lên hàng đầu
                      </p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-700 mb-2">
                        Gương mẫu
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Tiền phong trong mọi hoạt động
                      </p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-700 mb-2">
                        Kỷ luật
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Giữ gìn kỷ cương, kỷ luật nghiêm minh
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 3.0 }}
          className="text-center py-8"
        >
          <Card className="bg-gradient-to-r from-red-600 to-red-800 text-white border-0">
            <h3 className="text-2xl font-bold mb-4">
              Xây dựng Nhà nước trong sạch, vững mạnh theo tư tưởng Hồ Chí Minh
            </h3>
            <p className="text-lg text-red-100 mb-6">
              Kiểm soát quyền lực và phòng chống tiêu cực là nhiệm vụ quan
              trọng, cấp bách để giữ vững bản chất Nhà nước của dân, do dân, vì
              dân
            </p>
            <div className="flex justify-center space-x-4">
              <Button
                type="primary"
                size="large"
                className="bg-white text-red-600 border-white hover:bg-red-50"
              >
                Tìm hiểu thêm
              </Button>
              <Button
                size="large"
                className="border-white text-white hover:border-red-300 hover:text-red-100"
              >
                Thảo luận
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default NhaNotronSachVungManh;
