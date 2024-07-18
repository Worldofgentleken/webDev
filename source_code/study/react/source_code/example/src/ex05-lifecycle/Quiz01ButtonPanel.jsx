import React from "react"; // React를 import
import Button from "./Quiz01CalculatorBtn";  // Button 컴포넌트를 import

function ButtonPanel(props) {
  const buttons = [ // 버튼 배열
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "C"
  ];

  return (
    <div className="button-panel"> 
      {buttons.map(button => ( // 버튼 배열을 순회하며 각 버튼을 렌더링
        <Button 
          key={button} // 각 버튼의 고유 키
          name={button} // 버튼 이름
          handleClick={() => props.handleClick(button)} // 클릭 핸들러
        />
      ))}
    </div>
  );
}

export default ButtonPanel; // ButtonPanel 컴포넌트를 export
