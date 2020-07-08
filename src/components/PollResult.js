import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export class PollResult extends React.Component {

  handleClick = () => {
    this.props.history.push('/');
  };
  
  render() {
    const { question } = this.props;
    const optionOneVotes = question.optionOne.votes.length;
    const optionTwoVotes = question.optionTwo.votes.length;
    const votesTotal = optionOneVotes + optionTwoVotes;
	const percentageOptionOne = (optionOneVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(0)
    const percentageOptionTwo = (optionTwoVotes / (optionOneVotes + optionTwoVotes) * 100).toFixed(0)
	
	  return (
	    <div className="poll">
	      <div className="poll__header">Results</div>
	        <div className="poll__result__header">Would you rather?</div>
	          <div className="poll__result__question">{ question.optionOne.text }</div>
	            <div className="poll__result__option">{ percentageOptionOne } % <progress className="poll__result__progressbar" id="file" max={ votesTotal } value={ optionOneVotes }> 70% </progress></div>
	              <div className="poll_result__total">{ optionOneVotes } out of { votesTotal } votes</div>
	                <div className="poll__result__question">{ question.optionTwo.text }</div>
	                  <div className="poll__result__option">{ percentageOptionTwo } % <progress className="poll__result__progressbar" id="file" max={ votesTotal } value={ optionTwoVotes }> 70% </progress></div>
	                    <div className="poll_result__total">{ optionTwoVotes } out of { votesTotal } votes</div>
	                       <button className="poll__button result__button" onClick={ this.handleClick }>back</button>
        </div>
	)
  } 
}

  function mapStateToProps({ questions }, { id }) {
	const question = questions[id];

      return {
		questions,
		question: question ? question : null,
	 };
  }

export default withRouter(connect(mapStateToProps)(PollResult));