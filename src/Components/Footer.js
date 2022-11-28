import React from "react";

function Footer() {
  return (
    <div>
        <footer
          className="d-flex mb-0 p-0"
          style={{
            justifyContent: "space-between",
            backgroundColor: "#F2F2F5",
          }}
          >
          <h6 className="p-3 mx-5" style={{ fontSize: "12px" }}>
            2022 © Edisonvalley.
          </h6>
          <h6 className="p-3 mx-5" style={{ fontSize: "12px" }}>
            Design & Develop by <span style={{ color: "blue" }}>osperb</span>
          </h6>
        </footer>
    </div>
  );
}
export default Footer;
