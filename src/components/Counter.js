import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1000000
    }
  }

  increment = () => {
      let curVal = this.state.count;
      let newVal = curVal + 1;
      this.setState({
          count: newVal
      })
  }

  render() {
    return (
      <div>
        <p> Welcome fellow Cheesehead </p>
        <button onClick={() => this.increment()}>How great is Rodgers!!!</button>
        <p>The current count is: {this.state.count} times great!!</p>
        <p> This Week's All-Stars </p>
      </div>
    );
  }
}