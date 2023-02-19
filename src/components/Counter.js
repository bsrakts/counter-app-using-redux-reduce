import React, { Component } from 'react'
import { connect } from 'react-redux';
import IncreaseCounter from './IncreaseCounter.js';
import DecreaseCounter from './DecreaseCounter.js';
import IncreaseByTwoCounter from './IncreaseByTwoCounter.js';

class Counter extends Component {
  render() {
    return (
      <div>
        <h1 className="flex justify-center text-6xl mb-8">{this.props.counter}</h1>
        <div className="actionButtons flex justify-center">
          <IncreaseCounter />
          <DecreaseCounter />
          <IncreaseByTwoCounter />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { counter: state.counterReducer }
}

export default connect(mapStateToProps)(Counter);
