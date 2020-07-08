import React from 'react';
import { connect } from 'react-redux';

export class NoMatch extends React.Component {

  render() {
	return (
	  <div className="poll">No Match 404 Error</div>
	)
  }
}

export default connect()(NoMatch);