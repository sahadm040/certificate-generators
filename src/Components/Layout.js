import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
function Layout({ children }) {
  return (
    <div className="dashboard" style={{ display: "flex" }}>
      <SideBar />
      <div
        className="w-100 d-flex"
        style={{ flexDirection: "column", justifyContent: "space-between" }}
      >
        <div>
          <NavBar />
          {children}
          {/* <Container>{children}</Container> */}
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Layout;
