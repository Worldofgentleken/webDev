import React from "react"; // React를 import

function Button(props) {
  return (
    <button 
      className="button" // 버튼 스타일 클래스
      onClick={() => props.handleClick(props.name)} // 버튼 클릭 핸들러
    >
      {props.name} {/* 버튼 이름 */}
    </button>
  );
}

export default Button; // Button 컴포넌트를 export
