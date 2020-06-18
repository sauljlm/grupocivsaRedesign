import React from 'react';

import Header from '../components/header';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
      url : './data.json'
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <div className="gallery">
          <p>Hola</p>
        </div>
      </div>
    )
  }
}
