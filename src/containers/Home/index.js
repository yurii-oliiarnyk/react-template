import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import * as actions from '../../store/actions/home';

class Home extends Component {
  render() {
    return (
      <>
        <div>Counter: {this.props.counter}</div>
        <button onClick={() => this.props.increment()}>+ 1</button>
        <button onClick={() => this.props.incrementWithDelay()}>
          With Delay + 1
        </button>
        <button onClick={() => this.props.decrement()}>- 1</button>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.home.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement()),
    incrementWithDelay: () => dispatch(actions.incrementWithDelay()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
