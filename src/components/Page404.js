import React from 'react';
import { connect } from 'react-redux';

export class Page404 extends React.Component {

  render() {
	return (
	  <div className="poll__404">Sorry! Page doesn't exist!</div>
	)
  }
}

export default connect()(Page404);