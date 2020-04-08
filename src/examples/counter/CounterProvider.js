import React, { Component } from 'react';

export class CounterProvider extends Component {
  state = {
    count: 0,
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  incrementCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>{this.props.render(this.state.count, this.incrementCount)}</div>
    );
  }
}

export default CounterProvider;
