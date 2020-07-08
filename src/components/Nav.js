import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import '../index.css';

export class Nav extends React.Component {
  handleLogout = e => {
    e.preventDefault();
	  const { setAuthedUser } = this.props
        setAuthedUser(null);
  };
  render() {
	const { authedUser, users } = this.props
	  return (
	    <div className="nav">
	      <ul className="nav__menu--left">
	        <li className="nav__link"><NavLink to="/">Home</NavLink></li>
	        <li className="nav__link"><NavLink to="/add">New Question</NavLink></li>
	        <li className="nav__link"><NavLink to="/leaderboard">Leader Board</NavLink></li>
	      </ul>
	      <ul className="nav__menu--right">
	        <li className="nav__link nav__link--right">Hello, { authedUser }</li>
	        <li className="nav__link nav__link--right"><img src={ users[authedUser].avatarURL } alt={ authedUser } className="nav__link__img"/></li>
	        <li className="nav__link nav__link--right"><button  onClick={ this.handleLogout } className="nav__link__button">Log Out</button></li>
	      </ul>
	    </div>
	  )
  }
}

  function mapStateToProps({ authedUser, users }) {
    return {
      authedUser,
	  users
    };
  }
  function mapDispatchToProps(dispatch) {
    return {
      setAuthedUser: (id) => {
        dispatch(setAuthedUser(id))
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Nav);