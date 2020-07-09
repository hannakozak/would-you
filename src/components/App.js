import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login.js';
import Home from './Home.js';
import Nav from './Nav.js';
import LeaderBoard from './LeaderBoard.js';
import NewQuestion from './NewQuestion.js';
import PollCard from './PollCard.js';
import Page404 from './Page404.js';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
	    
    return (
      <Router>
        <div className='app'>
          {this.props.authedUser ? (
            <div>
              <Nav />
                <Switch>
                  <Route path='/' exact component={ Home } />
				  <Route path='/questions/:id' component={PollCard} />
				  <Route path='/add' component={ NewQuestion } />
                  <Route path='/leaderboard' component={LeaderBoard} />
				  <Route path='/page404' component={Page404} />
				  <Route component={Page404} />
                </Switch>
            </div>
          ) : (
            <Login />
          )}
        </div>
      </Router>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}

export default connect(mapStateToProps)(App);