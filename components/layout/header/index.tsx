import React from "react";

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <div style={titleStyle}><a href="/">Study Next.js</a></div>
    </header>
  );
};

const headerStyle: React.CSSProperties = {
  backgroundColor: "#efefef",
  color: "black",
  padding: "10px 20px",
  textAlign: "center",
};

const titleStyle: React.CSSProperties = {
  margin: 0,
  fontSize: "24px",
};

export default Header;
