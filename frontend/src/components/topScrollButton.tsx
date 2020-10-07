import React, { useState } from "react";
import { ArrowUpSquare } from "react-bootstrap-icons";

/**
 * 페이지 우측하단에 고정되어 표시되는 top scroll 버튼 컴포넌트
 */
const TopScrollButton = () => {
  const [showButton, setShowButton] = useState(false);

  /**
   * scroll 이동 위치에 따라 top scroll 버튼 show/hide 상태 변경
   */
  const handleScrollEvent = () => {
    const thresholdOffset = 100;

    if (!showButton && window.pageYOffset > thresholdOffset) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= thresholdOffset) {
      setShowButton(false);
    }
  };

  /**
   * top scroll 버튼 클릭시 페이지 상단으로 이동
   */
  const moveToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  // scroll 변경 이벤트 감지
  window.addEventListener("scroll", handleScrollEvent);

  return (
    <ArrowUpSquare className="top-scroll-button" onClick={moveToTop} style={{height: 40, display: showButton ? "block" : "none"}}/>
  );
};

export default TopScrollButton;