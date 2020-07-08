import React from 'react';
import { connect } from 'react-redux';
import PollPreview from './PollPreview.js';

export class Home extends React.Component {
  state = {
		answered: false
  }

  handleClick = () => {
    if (this.state.answered){
		  this.setState({answered: false})
	}
	else {
		  this.setState({answered: true})
	}
  }
	
  render() {
	  const { answeredQuestions, unansweredQuestions } = this.props;
	  const { answered } = this.state;
	    
		return (
	      <div className="home">
		    <div className="home__toggle">
	          <button className="home__button home__button--unanswered"  onClick={() => {this.setState({ answered: false})}} autoFocus>Unanswered</button>
	          <button className="home__button home__button--answered" onClick={() => {this.setState({ answered: true})}}>Answered</button>
			</div>
	        <div className="home__main">
		      {answered && answeredQuestions.map(id =>
		          <PollPreview key={id } id= { id } answered={ answered } />)
		      }
		    </div>
		    <div className="home__main">
		      {!answered && unansweredQuestions.map(id =>
	            <PollPreview key={ id } id={ id } answered={ answered }/>)
		      }
		    </div>
	      </div>
	    )
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answeredQuestions = Object.keys(questions)
	.filter((id) => users[authedUser].answers.hasOwnProperty(id))
	  .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

  const unansweredQuestions = Object.keys(questions)
	.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
	  .sort((a, b) => questions[b].timestamp - questions[a].timestamp);

    return {
	  answeredQuestions,
	  unansweredQuestions
    };
}

export default connect(mapStateToProps)(Home);