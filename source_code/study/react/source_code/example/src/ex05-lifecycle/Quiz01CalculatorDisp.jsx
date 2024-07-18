import React from "react"; // React를 import

function Quiz01CalculatorDisp(props) {
  return (
    <div className="display">
      {props.value}
    </div>
  );
}

export default Quiz01CalculatorDisp; // Display 컴포넌트를 export
