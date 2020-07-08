import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class PollPreview extends React.Component {

  render() {
    const { question, user, answered } = this.props
	const { id } = question

	  return (
	    <div className="poll">
		  <div className="poll__header">{user.name} asks:</div>
	        <div className="poll__card">
			  <div className="poll__card__img"><img src = {user.avatarURL} alt={user.name} className="poll__card__img"/></div>
	            <div className="poll__card__details">
	              <div className="poll__card__details__header">Would you rather</div>
	              <div className="poll__card__details__poll">{ question.optionOne.text } <br /> or...</div>
                  <Link to={`/questions/${id}`}>
					  {answered ? <button className="poll__button">Results</button> : <button className="poll__button">Answer Question</button>}
				  </Link>
				</div>
			</div>
	    </div>
	  )
  }
}

  function mapStateToProps({ authedUser, questions, users }, { id, answered }) {
    const question = questions[id]
	const user = users[question.author]

    return {
		user,
        question: question ? question : null,
		answered
    }
  }
  
export default connect(mapStateToProps)(PollPreview);
