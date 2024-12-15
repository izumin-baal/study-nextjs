import React, { Children } from "react";
import Header from "@/components/layout/header";

interface DefaultProps {
    children?: React.ReactNode;
}

const Home: React.FC<DefaultProps> = ({children}) => {
  return (
    <div style={pageStyle}>
      <Header />
      <main style={mainStyle}>
        {children}
      </main>
    </div>
  );
};

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "white",
  margin: 0,
  padding: 0,
};

const mainStyle: React.CSSProperties = {
  padding: "20px",
  textAlign: "center",
  color: "black",
};

export default Home;