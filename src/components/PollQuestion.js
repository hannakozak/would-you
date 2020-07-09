import React from 'react';
import { connect } from 'react-redux';
import {handleSaveAnswer} from '../actions/shared.js';
import { Redirect } from 'react-router-dom';

export class PollQuestion extends React.Component {
	
  state = {
    value: ""
  };

  handleChange = (e) => this.setState({ value: e.target.value });
  
  handleSubmit = (e) => {
	e.preventDefault();
	  const { authedUser, question, handleSaveAnswer} = this.props;
      const qid = question.id;
      const answer =  this.state.value;
	  if (answer){
        handleSaveAnswer(authedUser, qid, answer);
	  }
        console.log(this.state);
    }
  
  render() {
	if (this.props.badPath) {
            return <Redirect to='/page404' />
    }
	
	const { question, author} = this.props;	
	const { optionOne, optionTwo} = question;
	const { name, avatarURL } = author;
	
	  return (
        <div className="poll"> 
          <div className="poll__header"> { name } asks:</div>
            <div className="poll__card">
		      <div className="poll__card__img"><img src={avatarURL} height="50px" alt="{name}" className="poll__card__img"/></div>
			    <form className="poll__card__details" onSubmit={ this.handleSubmit }>
			      <div className="poll__card__details__header">Would you rather</div>
			        <div className="poll__card__details__poll">
					  <input type="radio" name='option' value="optionOne" onChange={ this.handleChange }/>{ optionOne.text }<div>or</div>
                      <input type="radio" name='option' value="optionTwo" onChange={ this.handleChange } />{ optionTwo.text }
			          <button className="poll__button">Submit</button>
		 	        </div>
                </form>
		    </div>
		</div>
      );
  }
}

  function mapStateToProps({ authedUser, questions, users }, { id }) {
	const question = questions[id];
	let badPath = false;
	if (question === undefined) {
      badPath = true;
	 }
	return {
	  badPath,
      authedUser,
	  users,
	  questions,
	  question: question ? question : null,
	  author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps, { handleSaveAnswer })(PollQuestion)
