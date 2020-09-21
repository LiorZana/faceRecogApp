import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import SignIn from './components/SignIn/SignIn.js'
import Register from './components/Register/Register.js'
import Rank from './components/Rank/Rank.js';
import ImgLinkForm from './components/ImgLinkForm/ImgLinkForm.js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import './App.css';


const particlesOptions = {
  fpsLimit: 60,
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 5,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#FF7E70",
    },
    links: {
      color: "#FFE3A4",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 6,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 80,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

const initialState = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    };

  loadUser = (data) => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  };

  displayBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onPictureSubmit = () => {
    this.setState({ imageUrl: this.state.input });
  

    fetch('https://sleepy-beach-45073.herokuapp.com/imageurl', {
          method: 'post',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            input: this.state.input,
          })
        })
    .then(response => response.json())
    .then(response => {
      if (response) {
        fetch('https://sleepy-beach-45073.herokuapp.com/image', {
          method: 'put',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({
            id: this.state.user.id,
          })
        })

        .then(response => response.json())

        .then(count => {this.setState(Object.assign
          (this.state.user, { entries: count }))
                        }
              ).catch(console.log);
        }
      this.displayBox(this.calculateFaceLocation(response))
    })
    .catch(err => console.log(err))
    };
  

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({ isSignedIn: true  })
    }
    this.setState({ route: route })
  }


renderSwitch = (route, imageUrl, box) => {
   switch(route) {
  case 'home': 
return <>
      <Logo />
      <Rank name={this.state.user.name} entries={this.state.user.entries}/>
      <ImgLinkForm 
        onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit}
      />
      <FaceRecognition imageUrl={imageUrl} box={box}/>
      </>
  case 'signin':
    return <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
    
  case 'register':
    return <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>;
  default:
    return <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser}/>
  }
}


  render()
  {  
    const { isSignedIn, route, imageUrl, box } = this.state;
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions}/>
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn}/>
        {this.renderSwitch(route, imageUrl, box)}
      </div>
      
    )};
}

export default App;
