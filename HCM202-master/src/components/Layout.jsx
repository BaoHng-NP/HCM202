import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    path: "/",
    label: "Trang chủ",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </svg>
    ),
  },
  {
    path: "/nha-nuoc-trong-sach",
    label: "Nhà nước trong sạch, vững mạnh",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
      </svg>
    ),
  },
  {
    path: "/van-dung-tu-tuong",
    label: "Vận dụng tư tưởng HCM",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
      </svg>
    ),
  },
  {
    path: "/tham-nhung-thao-luan",
    label: "Thảo luận & Phản biện",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V9h2v2zm0-4h-2V5h2v2z" />
      </svg>
    ),
  },
  {
    path: "/quiz",
    label: "Kiểm tra",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
      </svg>
    ),
  },
];

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Responsive Top Bar */}
      <div className="bg-primary shadow-2xl relative z-50">
        {/* Header Section with Navigation */}
        <div className="px-4 sm:px-6 py-3 lg:py-2">
          <div className="flex items-center justify-between">
            {/* Logo and Title - Always visible */}
            <div className="flex items-center space-x-3 sm:space-x-4 min-w-0 flex-1 lg:flex-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Emblem_of_Vietnam.svg"
                alt="Emblem of Vietnam"
                className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-lg sm:text-xl font-bold text-white truncate">
                  Tư tưởng Hồ Chí Minh
                </h1>
                <p className="text-red-200 text-xs sm:text-sm truncate">
                  Đảng và Nhà nước của dân, do dân, vì dân
                </p>
              </div>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:block">
              <div className="flex space-x-1">
                {menuItems.map((item) => {
                  const isActive = location.pathname === item.path;

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`topbar-item ${isActive ? "active" : ""}`}
                    >
                      <span className="text-lg mr-2">{item.icon}</span>
                      <span className="font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Menu Button - Only visible on mobile */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 },
                  }}
                  className="w-6 h-0.5 bg-white block transition-all duration-300 origin-center"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 },
                  }}
                  className="w-6 h-0.5 bg-white block mt-1.5 transition-all duration-300 origin-center"
                />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Mobile Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl lg:hidden z-50 overflow-y-auto"
              >
                {/* Mobile Menu Header */}
                <div className="bg-primary p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Emblem_of_Vietnam.svg"
                      alt="Emblem of Vietnam"
                      className="w-8 h-8"
                    />
                    <div>
                      <h2 className="text-white font-bold text-sm">Menu</h2>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="p-4">
                  <div className="space-y-2">
                    {menuItems.map((item, index) => {
                      const isActive = location.pathname === item.path;

                      return (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Link
                            to={item.path}
                            className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 ${
                              isActive
                                ? "bg-red-50 text-red-700 border-l-4 border-red-600"
                                : "text-gray-700 hover:bg-gray-50 hover:text-red-600"
                            }`}
                          >
                            <span
                              className={`text-xl ${
                                isActive ? "text-red-600" : "text-gray-500"
                              }`}
                            >
                              {item.icon}
                            </span>
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-auto">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Layout;
