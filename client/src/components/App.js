import React, { Component } from 'react';
import Header from './Header';
import BackgroundVideo from './BackgroundVideo';
import PublicHomePage from './PublicHomePage';
import '../css/App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch)

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  search = searchTerm => {
    this.setState({ searchTerm });
  };

  render () {  
    return (
      <div className="home-page-background" >
        <BackgroundVideo />
        <Header />
        <PublicHomePage 
          search={ this.search }
          history={ this.props.history }
          location={ this.props.location }
        />
      </div>
    )
  }
};

export default App;
