import React, { Component } from "react";

class Ex01Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("■1. Constructor: 컴포넌트가 생성되었습니다.");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(
      "■2-1. getDerivedStateFromProps: props 또는 state가 변경되었습니다."
    );
    return null; // 새로운 state를 반환하거나 null을 반환하여 아무 것도 변경하지 않음
  }

  componentDidMount() {
    console.log("■4-1. componentDidMount: 컴포넌트가 마운트되었습니다.");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "■2-2. shouldComponentUpdate: 컴포넌트가 업데이트될지 여부를 결정합니다."
    );
    return true; // true를 반환하면 컴포넌트를 업데이트
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(
      "■3-2. getSnapshotBeforeUpdate: DOM 업데이트 직전에 호출됩니다."
    );
    return null; // 업데이트 전의 정보를 반환하거나 null을 반환
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("■4-2. componentDidUpdate: 컴포넌트가 업데이트되었습니다.");
  }

  componentWillUnmount() {
    console.log(
      "■5. componentWillUnmount: 컴포넌트가 언마운트될 준비가 되었습니다."
    );
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("■3-1. Render: 컴포넌트를 렌더링합니다.");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Ex01Lifecycle;
