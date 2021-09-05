import React from "react";

export const Footer = () => {
  let footerStyle = {
    width: "100%",
    border: "4px solid green",
  };
  return (
    <footer className="bg-dark text-light py-2 " style={footerStyle}>
      <p className="text-center">Copyrigth &copy; My TodosList.com</p>
    </footer>
  );
};
