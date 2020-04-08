import React, { Component } from 'react';

export class UpArrowCounter extends Component {
  componentDidMount() {
    // Arrows keys are only triggered by onkeydown/up , not onkeypress
    document.body.addEventListener('keydown', this.incrementCount);
  }
  componentWillUnmount() {
    document.body.removeEventListener('keydown', this.incrementCount);
  }

  incrementCount = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode === 38) {
      // keyCode takes number!
      this.props.incrementCount();
    }
  };

  render() {
    const { count } = this.props;
    return (
      <div>
        <h1>Press up arrow key to increment: {count}</h1>
      </div>
    );
  }
}

export default UpArrowCounter;
