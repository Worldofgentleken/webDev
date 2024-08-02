import React, { Component } from "react";
import Ex02Lifecycle from "./Ex02Lifecycle";

class Ex02ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showComponent: true };
  }

  toggleComponent = () => {
    this.setState((prevState) => ({ showComponent: !prevState.showComponent }));
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleComponent}>
          {this.state.showComponent ? "Hide" : "Show"} Component
        </button>
        {this.state.showComponent && <Ex02Lifecycle />}
      </div>
    );
  }
}

export default Ex02ParentComponent;
