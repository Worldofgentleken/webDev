import React, { Component } from "react";

class Ex02Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null, count: 0 };
    console.log("★1. Constructor: 컴포넌트가 생성되었습니다.");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "★2-1. getDerivedStateFromProps: props 또는 state가 변경되었습니다."
    );
    return null; // 새로운 state를 반환하거나 null을 반환하여 아무 것도 변경하지 않음
  }

  componentDidMount() {
    console.log("★4-1. componentDidMount: 컴포넌트가 마운트되었습니다.");
    // 예: 네트워크 요청
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => {
        console.log("★4-2. 외부 요청 결과 응답을 통해 data state 변경 감지");
        setTimeout(() => {
          this.setState({ data });
          console.log("★4-3. 3초 후 data state 변경");
        }, 3000);
      });

    // 타이머 설정
    this.timerID = setInterval(() => {
      console.log("★4-2. 타이머 동작 중. count state 변경 감지");
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "★2-2. shouldComponentUpdate: 컴포넌트가 업데이트될지 여부를 결정합니다."
    );
    return true; // true를 반환하면 컴포넌트를 업데이트
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "★3-2. getSnapshotBeforeUpdate: DOM 업데이트 직전에 호출됩니다."
    );
    return null; // 업데이트 전의 정보를 반환하거나 null을 반환
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("★4-2. componentDidUpdate: 컴포넌트가 업데이트되었습니다.");
  }

  componentWillUnmount() {
    console.log(
      "★5. componentWillUnmount: 컴포넌트가 언마운트될 준비가 되었습니다."
    );
    // 타이머 정리
    clearInterval(this.timerID);
  }

  render() {
    console.log("★3-1. Render: 컴포넌트를 렌더링합니다.");
    return (
      <div>
        <h1>Example Component</h1>
        <p>
          Data:{" "}
          {this.state.data ? JSON.stringify(this.state.data) : "Loading..."}
        </p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default Ex02Lifecycle;
