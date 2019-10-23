import React, { Component } from 'react';
import { homeStyle } from '../utils/constants';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import '../style/home.css'
import Paper from 'material-ui/Paper';
import Question from '../components/bagOfCoins/question'

class BagsOfCoins extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 0
    }
  }

  next() {
    let index = this.state.pageIndex + 1
    this.setState({ pageIndex: index })
  }

  back() {
    let index = this.state.pageIndex - 1
    this.setState({ pageIndex: index })
  }

  renderButtons(state, pagesLength) {
    return (
      <div>
        {state.pageIndex !== 0 && <FlatButton
          type="submit"
          label="Back"
          backgroundColor="#00A3E1"
          hoverColor="#00A3C2"
          style={{ margin: 12, color: '#FFFFFF' }}
          onClick={() => this.back()}
        />}
       {(state.pageIndex <  pagesLength -1) && <FlatButton
          type="submit"
          label="Next"
          backgroundColor="#00A3E1"
          hoverColor="#00A3C2"
          style={{ margin: 12, color: '#FFFFFF' }}
          onClick={() => this.next()}
        />}
      </div>
    )
  }

  render() {
    const { pageIndex } = this.state;
    let pages = [<Question />]
    return (
      <div>
       <div className="help">
          <h3>Coin challenge</h3>
          {(pageIndex <= pages.length) && <Paper style={{ width: 'calc(100% - 45px)', margin: 15, paddingLeft: 30, paddingBottom: 30, paddingRight: 30 }} zDepth={2}>{pages[pageIndex]}</Paper>}
          {this.renderButtons(this.state, pages.length)}
        </div>
      </div>
    );
  }
}

export default BagsOfCoins;