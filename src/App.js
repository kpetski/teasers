import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {
  Switch,
  Route,
  Redirect,
  withRouter
} from 'react-router-dom';
import Home from './views/home';
import HorseRace from './views/horseRace';
import BagsOfCoints from './views/bagsOfCoins'
import Navigation from './components/nav';
import About from './views/about';

class App extends Component {
  render() {
    //console.log(this.props.user)
    return (
      <div className="App" style={ {color: `#fff`} }>
        <Navigation />

        <div id="main" className="content-container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/coins' component={BagsOfCoints} />
              <Route exact path='/horserace' component={HorseRace} />
              <Route exact path='/about' component={About} />
              <Route render={ () => ( <Redirect to='/' />) } />
            </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    viewData: state.viewData,
    loadingData: state.loadingData
  }
}

export default withRouter(connect(mapStateToProps)(App))

