import React, { Component } from 'react';
import '../css/player.css';



class Player extends Component {
  state = {
      play: false
    }
    audio = new Audio()

    onPlay = () => {
      this.setState({ play: true });
      this.audio.src = this.props.url;
      this.audio.play();
    }

    onStop = () => {
      this.setState({ play: false });
      this.audio.src = "";
      this.audio.pause();
    }

    plusV = () => {
      let number = this.audio.volume + 0.1;
      this.audio.volume = number <= 1 ? number : 1;
    }

    minusV = () => {
      let number = this.audio.volume - 0.1;
      this.audio.volume = number >= 0 ? number : 0;
    }

    componentWillReceiveProps(nextProps) {
      if(nextProps.url !== this.props.url) {
        this.setState({ play: true });
        this.audio.src = nextProps.url;
        this.audio.play();
      }
    }

  render () {
    return (
      <div className="player">
        <div className={this.state.play ? "player__display On" : "player__display"}>
          <img src={this.props.img} alt="Logo" className="playerLogo" />
          <h4 className="playerText">{this.props.name}</h4>
        </div>
        <div className="btn__group">
          <button onClick={this.onPlay} className="btn play"><i className="fas fa-play"></i></button>
          <button onClick={this.onStop} className="btn stop"><i className="fas fa-stop"></i></button>
          <button onClick={this.plusV} className="btn plus"><i className="fas fa-plus"></i></button>
          <button onClick={ this.minusV } className="btn minus"><i className="fas fa-minus"></i></button>
        </div>
      </div>
    );
  }
}

export default Player;
