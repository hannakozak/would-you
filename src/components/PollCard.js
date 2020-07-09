import React from 'react';
import { connect } from 'react-redux';
import PollQuestion from './PollQuestion.js';
import PollResult from './PollResult.js';

class PollCard extends React.Component {
  render() {
	const { authedUserAnsweres, match } = this.props;
	const id = match.params.id;
	const answered = authedUserAnsweres.hasOwnProperty(id) ? true : false;

	  return (
	  
		<div>			
		  {answered ? <PollResult id={ id } /> : <PollQuestion id={ id } />}
		</div>
	  );
  }
}

  function mapStateToProps({ authedUser, users }) {
	const authedUserAnsweres = users[authedUser].answers;
	return {
		authedUserAnsweres
	};
  }

export default connect(mapStateToProps)(PollCard);

