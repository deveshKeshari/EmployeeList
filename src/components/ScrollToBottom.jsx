import React from "react";

const ScrollToBottom = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, 
      behavior: "smooth", 
    });
  };

  return (
    <button 
      onClick={handleScroll} 
      className="scroll"
    >
      Scroll to Bottom
    </button>
  );
};

export default ScrollToBottom;
