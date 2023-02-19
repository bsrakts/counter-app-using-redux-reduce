import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { decreaseCounter } from '../redux/actions/counterActions';

class DecreaseCounter extends Component {
  render() {
    return (
      <div className='flex'>
        <button className="border border-white m-1 p-2" onClick={e => {
          this.props.dispatch(decreaseCounter())
        }}>-1 Decrease</button>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(decreaseCounter, dispatch) }
}

export default connect(mapDispatchToProps)(DecreaseCounter);
