import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 6

    }
  }
  handleIncreaseCount = (e) => {
    e.preventDefault();
    this.setState({count:this.state.count +1})
  }

 

handleDecreaseCount = (e) => {
  e.preventDefault();
  this.setState({count:this.state.count -1})
}

  
  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <hr />
        <button onClick={this.handleIncreaseCount}>Increase</button>
        <button onClick={this.handleDecreaseCount}>decrease</button>


      </div>
      
    );
  }
}



export default CounterClass;
