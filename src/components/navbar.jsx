// import React from "react";
// import { Layout, Menu } from "antd";
// import "./../app.css";
// import handleScroll from "./scroll";
// const { Header } = Layout;

// const Navbar = () => {
//   return (
//     <Layout>
//       <Header style={{ display: "flex", alignItems: "center" }}>
//         <div
//           className="logo"
//           style={{
//             color: "rgb(22 242 179)",
//             fontSize: "1.875rem",
//             fontWeight: "700",
//             lineHeight: "2.25rem",
//           }}
//         >
//           Piyush Tiwari
//         </div>
//         <Menu
//           theme="light"
//           mode="horizontal"
//           defaultSelectedKeys={["1"]}
//           style={{
//             flex: 1,
//             minWidth: 0,
//             justifyContent: "flex-end",
//             backgroundColor: "#0d1224",
//             color: "white",
//             marginRight: "40px",
//           }}
//         >
//           <Menu.Item
//             key="1"
//             style={{ color: "white" }}
//             onClick={() => handleScroll("about")}
//           >
//             About
//           </Menu.Item>
//           <Menu.Item
//             key="2"
//             style={{ color: "white" }}
//             onClick={() => handleScroll("experience")}
//           >
//             Experience
//           </Menu.Item>
//           <Menu.Item
//             key="3"
//             style={{ color: "white" }}
//             onClick={() => handleScroll("skills")}
//           >
//             Skills
//           </Menu.Item>
//           <Menu.Item
//             key="4"
//             style={{ color: "white" }}
//             onClick={() => handleScroll("contact")}
//           >
//             Contact
//           </Menu.Item>
//         </Menu>
//       </Header>
//     </Layout>
//   );
// };

// export { Navbar };


import React, { useState, useEffect } from "react";
import { Layout, Menu, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import "./../app.css";
import handleScroll from "./scroll";

const { Header } = Layout;

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    { key: "1", label: "About", section: "about" },
    { key: "2", label: "Experience", section: "experience" },
    { key: "3", label: "Skills", section: "skills" },
    { key: "4", label: "Contact", section: "contact" },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#0d1224",
          padding: "0 20px",
        }}
      >
        <div
          className="logo"
          style={{
            color: "rgb(22 242 179)",
            fontSize: "1.875rem",
            fontWeight: "700",
            lineHeight: "2.25rem",
          }}
        >
          Piyush Tiwari
        </div>

        {/* Mobile Menu (Drawer) */}
        {isMobile ? (
          <>
            <MenuOutlined
              style={{ fontSize: "1.8rem", color: "white", cursor: "pointer" }}
              onClick={() => setVisible(true)}
            />
            <Drawer
              placement="right"
              onClose={() => setVisible(false)}
              drawerStyle={{ backgroundColor: "#0d1224" }}
              closeIcon={<span className="text-white text-2xl">×</span>}
              visible={visible}
              className="bg-[#0d1224]"
            >
              <Menu
                theme="dark"
                mode="vertical"
                onClick={() => setVisible(false)}
                style={{ backgroundColor: "#0d1224" }}
              >
                {menuItems.map((item) => (
                  <Menu.Item
                    key={item.key}
                    style={{ color: "white" }}
                    onClick={() => handleScroll(item.section)}
                  >
                    {item.label}
                  </Menu.Item>
                ))}
              </Menu>
            </Drawer>
          </>
        ) : (
          // Desktop Menu
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{
              flex: 1,
              minWidth: 0,
              justifyContent: "flex-end",
              backgroundColor: "#0d1224",
              color: "white",
              marginRight: "40px",
            }}
          >
            {menuItems.map((item) => (
              <Menu.Item
                key={item.key}
                style={{ color: "white" }}
                onClick={() => handleScroll(item.section)}
              >
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        )}
      </Header>
    </Layout>
  );
};

export { Navbar };
