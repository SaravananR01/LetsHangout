import React from "react";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
