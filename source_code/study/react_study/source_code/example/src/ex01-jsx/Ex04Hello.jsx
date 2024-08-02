import React from 'react';

class Hello extends React.Component {
  render() {
    return <div>Hello~ {this.props.who}</div>;
  }
}

const element = <h1 class='greet'>Hello~</h1>;

const Ex04Hello = (props) => {
  return (
    <React.Fragment>
      <Hello who={props.who} />
      {element}
    </React.Fragment>
  )
}


export default Ex04Hello;