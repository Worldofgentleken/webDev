import React from "react";

// 유저 정보를 보여주는 클래스형 컴포넌트
class Practice01UserInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>{`사용자 이름은 ${this.props.name}입니다.`}</h3>
        <h4>{`나이는 ${this.props.age}세 입니다.`}</h4>
      </div>
    );
  }
}

export default Practice01UserInfo;
