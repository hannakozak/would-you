import React from 'react';
import { connect } from 'react-redux';
import { handleSaveQuestion } from '../actions/shared';
import { withRouter } from 'react-router-dom';


export class NewQuestion extends React.Component {
  state = {
    option1: '',
    option2: ''
  };
  
  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  
  handleSubmit = e => {
    e.preventDefault();
      const { authedUser, handleSaveQuestion } = this.props;
      const { option1, option2 } = this.state;
       handleSaveQuestion(option1, option2, authedUser);
	     this.setState({option1: '', option2: ''});
	       this.props.history.push('/');
   };
  
  render() {
	return (
	  <div className="poll">
	    <div className="poll__header">Create a New Poll</div>
	      <div className="poll__new__header1">Complete the question:</div>
		    <div className="poll__new__header2">Would you rather...</div>
	          <form className="poll__new__form" onSubmit={ this.handleSubmit }>
	            <input className="poll__new__form__input" id="option1" type="text" value={ this.state.option1 } onChange={this.handleChange} placeholder="Enter option one ..."/>
	              <div>or</div>
	                <input className="poll__new__form__input" id="option2" type="text"  value={ this.state.option2 } onChange={ this.handleChange }  placeholder="Enter option two ..."/>
	                  <button className="poll__button">Submit</button>
	          </form>
	  </div>
	)
  } 
}

  function mapStateToProps({ authedUser }) {
	return {
      authedUser,
	};
  }
  
export default withRouter(connect(mapStateToProps, { handleSaveQuestion })(NewQuestion));