import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ConfigProvider } from "antd";
import Layout from "./components/Layout";
import TongHopPresentation from "./pages/TongHopPresentation";
import BaoCap from "./pages/BaoCap";
import DoiMoi from "./pages/DoiMoi";
import NhanDinh from "./pages/NhanDinh";
import Timeline from "./pages/Timeline";
import TuLieu from "./pages/TuLieu";
import QuizPage from "./pages/QuizPage";
import NhaNotronSachVungManh from "./pages/NhaNotronSachVungManh";
import VanDungTuTuongHCM from "./pages/VanDungTuTuongHCM";
import ThamNhungThaoLuan from "./pages/ThamNhungThaoLuan";
import ChatBox from "./components/ChatBox";

const theme = {
  token: {
    colorPrimary: "#B71C1C",
    colorInfo: "#B71C1C",
    colorSuccess: "#FFD700",
    fontFamily: "Inter, Roboto, sans-serif",
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<TongHopPresentation />} />
            <Route path="/tong-hop" element={<TongHopPresentation />} />
            <Route
              path="/nha-nuoc-trong-sach"
              element={<NhaNotronSachVungManh />}
            />
            <Route path="/van-dung-tu-tuong" element={<VanDungTuTuongHCM />} />
            <Route
              path="/tham-nhung-thao-luan"
              element={<ThamNhungThaoLuan />}
            />
            <Route path="/bao-cap" element={<BaoCap />} />
            <Route path="/doi-moi" element={<DoiMoi />} />
            <Route path="/nhan-dinh" element={<NhanDinh />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/tu-lieu" element={<TuLieu />} />
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </Layout>

        <ChatBox
          title="AI Tư tưởng Hồ Chí Minh"
          subtitle="Trợ lý AI về tư tưởng HCM và xây dựng Đảng, Nhà nước"
          primaryColor="#B71C1C"
          initialMessage="Xin chào! Tôi có thể giúp bạn tìm hiểu về tư tưởng Hồ Chí Minh trong xây dựng Đảng và Nhà nước. Bạn muốn biết điều gì?"
        />
      </Router>
    </ConfigProvider>
  );
}

export default App;
