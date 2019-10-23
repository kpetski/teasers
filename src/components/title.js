import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { TITLE } from '../utils/constants'

class Title extends Component {
  render() {

    return (
      <div style={ {display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: 'center'}}>
        <span style={{cursor: 'pointer'}} onClick={() => this.props.history.push("/")}>{TITLE}</span>
      </div>
    );
  }
}

export default withRouter(Title);