import React from 'react';
import { connect } from 'react-redux';

export class LeaderBoard extends React.Component {

  render() {
	const { leaders } = this.props;
	  return (
	    <div className="leaderboard">{ leaders.map((user, id) => (
	      <div key={ user.id } className="leaderboard__card">
	        <div className="leaderboard__img"><img src ={ user.avatarURL } alt={ user.name } className="leaderboard__img"/></div>
	          <div className="leaderboard__user">
	            <div className="leaderboard__header"> { user.name }</div>
	              <div className="leaderboard__question">Answered questions: { user.answerSum }</div>
	                <div className="leaderboard__question">Created questions: { user.questionSum }</div>
	          </div>
	                  <div className="leaderboard__score">Score: <br/>{user.answerSum+user.questionSum}</div>
	      </div>
	      ))}
	    </div>
	  )
   } 
}

function mapStateToProps({ users }) {
  const leaders = Object.values(users).map(user =>({
	id: user.id,
	name: user.name,
	avatarURL: user.avatarURL,
	answerSum: Object.values(user.answers).length,
    questionSum: user.questions.length,
	total: Object.values(user.answers).length + user.questions.length})).sort((a, b) => a.total - b.total).reverse().slice(0, 3)
	  return {
        leaders
      };
}

export default connect(mapStateToProps)(LeaderBoard);