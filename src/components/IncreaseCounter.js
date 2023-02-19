import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { increaseCounter } from '../redux/actions/counterActions'
import { connect } from 'react-redux';

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button className="border border-white m-1 p-2" onClick={e => {
          this.props.dispatch(increaseCounter())
       }}>+1 Increase</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(increaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(IncreaseCounter);
