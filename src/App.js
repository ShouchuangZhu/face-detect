import React, { Component } from 'react';
import Navigation from './Comps/Navigation'
import Logo from './Comps/Logo'
import ImageLinkForm from './Comps/ImageLinkForm'

import './App.css';
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Logo />
        <ImageLinkForm />
       {/*   
        
       <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
