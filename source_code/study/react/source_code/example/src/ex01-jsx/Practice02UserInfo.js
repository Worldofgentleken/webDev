import React from "react";

// 유저 정보를 보여주는 클래스형 컴포넌트
class Practice02UserInfo extends React.Component {
  render() {
    return React.createElement("div", null, [
      React.createElement(
        "h3",
        { key: "name" },
        `사용자 이름은 ${this.props.name}입니다.`
      ),
      React.createElement(
        "h4",
        { key: "age" },
        `나이는 ${this.props.age}세 입니다.`
      ),
    ]);
  }
}

export default Practice02UserInfo;
