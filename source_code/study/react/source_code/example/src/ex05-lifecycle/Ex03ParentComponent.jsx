import React, { Component } from "react";
import Ex03Lifecycle from "./Ex03Lifecycle";

class Ex03ParentComponent extends Component {
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
        {this.state.showComponent && <Ex03Lifecycle />}
      </div>
    );
  }
}

export default Ex03ParentComponent;
