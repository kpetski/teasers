import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import ActionHome from 'material-ui/svg-icons/action/home';
import ExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import About from 'material-ui/svg-icons/action/help';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import WhatsHot from 'material-ui/svg-icons/social/whatshot';
import {fullWhite} from 'material-ui/styles/colors';

import Title from '../components/title';

class MovieGeekNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: false,
      loginModalOpen: false,
    }
  }

  handleMenuOpen = () => this.setState( {sideNavOpen: !this.state.sideNavOpen} );

  render() {
    const {user} = this.props;

    return (
      <nav>
        <AppBar
          title={<Title />}
          onLeftIconButtonClick={this.handleMenuOpen}
        />

        <Drawer
          open={this.state.sideNavOpen}
          docked={false}
          onRequestChange={this.handleMenuOpen}
        >
          {
            user &&
              <div>
                <MenuItem
                  leftIcon={
                    user.avatar.includes("http") ?
                      <img style={ {borderRadius: '50%',}} src={user.avatar} alt={user.name} />
                    :
                      <ActionAccountCircle />}
                  rightIcon={<ArrowDropRight />}
                  primaryText={user.name}
                  style={{backgroundColor: '#263238', color: '#ECEFF1'}}
                  menuItems={[
                    <MenuItem
                      primaryText="Logout"
                      rightIcon={<ExitToApp />}
                      onClick={() => {
                        this.handleMenuOpen();
                        this.props.userLogout();
                        this.props.history.push("/");
                      }}
                    />
                  ]}
                />
                <Divider />
              </div>
          }
          <MenuItem
            primaryText="Home"
            leftIcon={<ActionHome color={fullWhite} />}
            containerElement={<Link to="/" />}
            onClick={this.handleMenuOpen}
            style={ {backgroundColor: '#607D8B', color: '#ECEFF1'}}
          />
          <Divider />]
          <MenuItem
            primaryText="Horse Race"
            containerElement={<Link to="/horserace" />}
            onClick={this.handleMenuOpen}
          />
          <Divider />
          <MenuItem
            primaryText="About"
            rightIcon={<About />}
            containerElement={<Link to="/about" />}
            onClick={this.handleMenuOpen}
          />
          <div
            style={{
              position: 'fixed',
              bottom: 0,
              textAlign: 'center',
              marginBottom: 20,
              width: '100%',
            }}
          >
          <FloatingActionButton
            onClick={this.handleMenuOpen}
            containerElement={<Link to="/about" />}
            backgroundColor="#263238">
            <WhatsHot />
          </FloatingActionButton>
          </div>
        </Drawer>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default withRouter( connect(mapStateToProps)(MovieGeekNav) );