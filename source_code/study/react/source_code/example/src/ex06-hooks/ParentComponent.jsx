import React, { Component } from "react";
import Lifecycle from "./Lifecycle";

class ParentComponent extends Component {
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
        {this.state.showComponent && <Lifecycle />}
      </div>
    );
  }
}

export default ParentComponent;
