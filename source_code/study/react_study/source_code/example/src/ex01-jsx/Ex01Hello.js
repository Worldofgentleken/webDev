import React from 'react';

class Ex01Hello extends React.Component{
  render(){
    return React.createElement('div', null, `Hello~ ${this.props.who}`);
  }
}

export default Ex01Hello;