import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  };

  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "450",
          marginBottom: "1rem",
          lineHeight: "1em",
          color: "#00CCCC",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        todos
      </h1>
    </header>
  );
};

export default Header;
