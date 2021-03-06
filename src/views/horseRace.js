import React, { Component } from 'react';
import { homeStyle } from '../utils/constants';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import '../style/home.css'
import Paper from 'material-ui/Paper';
import imgHorse from '../assets/horseRace.jpg'
import StepOne from '../components/horseRace/stepOne'
import StepTwo from '../components/horseRace/stepTwo'
import StepThree from '../components/horseRace/stepThree'
import Simulation from '../components/horseRace/simulation'
import Question from '../components/horseRace/question'
import Results from '../components/horseRace/results'

class HorseRace extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 0,
      userAnswer: null
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

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value, error: '' });
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
    const { userAnswer, pageIndex } = this.state;
    let pages = [<Question />, <Results userAnswer={this.state.userAnswer}/>, <StepOne />, <StepTwo />, <StepThree />, <Simulation userAnswer={this.state.userAnswer}/>]
    return (
      <div>
       <div className="help">
          <h3>Horse Race</h3>
          {(pageIndex <= pages.length) && <Paper style={{ width: 'calc(100% - 45px)', margin: 15, paddingLeft: 30, paddingBottom: 30, paddingRight: 30 }} zDepth={2}>{pages[pageIndex]}</Paper>}
          {this.state.pageIndex === 0 &&
            <div>
              <TextField
                floatingLabelText="Enter Your Guess"
                name="userAnswer"
                type="number"
                required={true}
                value={userAnswer}
                onChange={this.handleInput}
                style={{ width: '100%', display: 'block' }}
                inputStyle={{ color: '#263238' }}
                autoComplete="new"
                min={0}
                required={true}
              /></div>}
          {this.renderButtons(this.state, pages.length)}
        </div>


      </div>
    );
  }
}

export default HorseRace;