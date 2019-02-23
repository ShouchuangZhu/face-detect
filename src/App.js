import React, { Component } from 'react';
import Navigation from './Comps/Navigation'
import Logo from './Comps/Logo'
import ImageLinkForm from './Comps/ImageLinkForm'
import Rank from './Comps/Rank/Rank'
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './Comps/FaceRecognition/FaceRecognition'
import './App.css';
import 'tachyons';


const app = new Clarifai.App({
  apiKey: '747e5e99dbf84ddd870b6124e030a831'
 });

const particlesIn = {
  Particles:{
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 1200
        }
      }
    }         
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }
  onInputChngae = (event) =>{
    this.setState({input: event.target.value}); 
  }

  onSubmit=()=>{
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(function(response){
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );

  }
  render() {
    return (
      <div className='App'>
      <Particles className='particles'
          params={{particlesIn}} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChngae={this.onInputChange} onSubmit={this.onSubmit} />
      
       <FaceRecognition imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}

export default App;
