import React from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import Select from 'react-select';
import logo from '../images/logo.png'

export class Login extends React.Component {
  state = {
    authedUser: null,
	selectedValuePlaceholder: "select"
  }
	
  handleChange = ({ value, label }) => 
	this.setState({ authedUser: value, selectedValuePlaceholder: label })
	
  handleLogin = (e) => {
    e.preventDefault()
      const { authedUser } = this.state
      const { setAuthedUser } = this.props
        if (authedUser) {
          setAuthedUser(authedUser)
        } 
	      else 
			alert('Choose Your Name!')
  }
	
  render() {
    const { users } = this.props
	const options = users.map(user => {
	  const myOptions = [];
        myOptions.value = user.id;
	    myOptions.label = <div><img src={ user.avatarURL } alt={ user.name } className="login__select__img"/>{ user.name }</div>;
	      return myOptions;
    });
	
    return (
	  <div className="login">
	    <div className="login__header">
	      <div className="login__header1">Welcome to the Would You Rather App!</div>
	      <div className="login__header2">Please sign in to continue</div>  
	    </div>
		  <img src={ logo } alt="logo" className="login__img"/>
          	<div className="login__form">	
	          <form onSubmit={ this.handleLogin }> 
			    <div className="login__select">
	              <Select value={ options.value } placeholder={ this.state.selectedValuePlaceholder }
                  onChange={ this.handleChange } options={ options }/>  
				</div>
		        <button className="login__button">sign in</button>
		      </form> 
            </div>				
	  </div>
	)
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.values(users)
  };
}

function mapDispatchToProps(dispatch) {
    return {
        setAuthedUser: (id) => {
            dispatch(setAuthedUser(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)