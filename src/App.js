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
  apiKey: '88c639ccb8ca4346a7b1c78b8c517228'
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
      box: {},
    }
  }

  calculateFaceLocation = (data) =>{
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      botRow: height - (clarifaiFace.bottom_row * height),
    }
  }
  setBox = (box) =>{
    this.setState({box: box});
  }
  onInputChange = (event) =>{
   this.setState({input: event.target.value}); 
  }

  onSubmit=()=>{
    this.setState({imageUrl: this.state.input});
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.setBox(this.calculateFaceLocation(response)))
    .catch(err=> console.log(err));
  } 
  
  render() {
    return (
      <div className='App'>
      <Particles className='particles'
          params={{particlesIn}} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange}  onSubmit={this.onSubmit}  />
      
       <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/> 
      </div>
    );
  }
}

export default App;
