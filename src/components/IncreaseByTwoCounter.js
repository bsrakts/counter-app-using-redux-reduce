import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { increaseByTwoCounter } from '../redux/actions/counterActions';

class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div className='flex'>
        <button className="border border-white m-1 p-2" onClick={e => { this.props.dispatch(increaseByTwoCounter()) }}> +2 Decrease</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(increaseByTwoCounter, dispatch) }
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter)
