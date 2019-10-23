import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../components/theme';
import { getFlashWatch } from '../store/actions';
import { withRouter } from "react-router-dom";

class FlashWatch extends Component{

  componentDidMount() {
    this.props.flashWatchData === undefined && this.props.dispatchGetFlashWatch()
  }

  render(){

    return (
      <div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loadingData: state.loadingData,
    flashWatchData: state.flashWatchData,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatchGetFlashWatch(){
      dispatch(getFlashWatch())
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FlashWatch))