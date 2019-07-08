import React, { Component } from 'react';
import Player from './Components/Player';
import Skin from './Components/Skin';
import RadioStations from './Components/RadioStations';
import './css/app.css';

class App extends Component {
  state = {
    stationName: '',
    stationURL: '',
    stationImg: 'https://images.vexels.com/media/users/3/127486/isolated/preview/38ff2a5e0903eac1fa51b2d1a9087bed-hello-comic-speech-doodle-by-vexels.png',
    background: "bg1"
  }

  updateSkin = (newSkin) => {
    this.setState({ background: newSkin });
  }

  chooseStation = (name, url, img) => {
     this.setState({
       stationName: name,
       stationURL: url,
       stationImg: img
     })
  }

  render() {
    return (
      <div className="app" id={this.state.background}>
        <div className="player-wrapper">
          <Player
            name={this.state.stationName}
            url={this.state.stationURL}
            img={this.state.stationImg}
            />
          <RadioStations chooseStation={this.chooseStation} />
        </div>
        <Skin bg={this.state.background} updateSkin={this.updateSkin} />
      </div>
    );
  }
}

export default App;
