import React, { Component } from 'react';
import '../css/radioStations.css';
import Hip_hop from '../img/hiphop-icon.png';
import TuneIn from '../img/TuneIn_Logo.png';
import hitz from '../img/100hitz.png';
import ThatChannel from '../img/ThatChannel.png';
import K_LOVE from '../img/K-LOVE.png';
import road from '../img/road.png';
import KCRW from '../img/KCRW.png';

class RadioStations extends Component {
  state = {
    arr: []
  }
  dataSearch = e => {
    const value = e.target.value.toLowerCase();
    const filter = stations.map(item => (
      item.name.toLowerCase().includes(value)
    ))
    this.setState({arr: filter});
  };

  render () {
    return(
      <React.Fragment>
        <div className="list__station">
          <ul>
            <h2 className="list__station_title">Radio stations:</h2>
            {
              stations.map(item => (
                <li key={item.id}  onClick={() => { this.props.chooseStation(item.name, item.url, item.img) }}>
                  <div className={this.state.arr[item.id-1] ? "station include" : "station"}>
                    <img src={item.img} alt="Logo" className="logo" />
                    {item.name}
                  </div>
                </li>
              ))
            }
          </ul>
          <input
            type="text"
            className="dataSearch"
            placeholder="Search station..."
            onChange={this.dataSearch}
          />
        </div>
      </React.Fragment>
    )
  }
}

let stations = [{
        id: 1,
        name: 'Hip-hop 89.9',
        url: 'http://tunein4.streamguys1.com/hhbeafree5',
        img: Hip_hop
    },
    {
        id: 2,
        name: "Tune In",
        url: 'http://rfcmedia.streamguys1.com/MusicPulse.mp3',
        img: TuneIn
    },
    {
        id: 3,
        name: '100hitz - Hot Hitz',
        url: 'http://gr01.cdnstream.com:8290/',
        img: hitz
    },
    {
        id: 4,
        name: "That 70's Channel",
        url: 'http://los.cdnstream.com/1101_128?cb=553828.mp3',
        img: ThatChannel
    },
    {
        id: 5,
        name: 'K-LOVE Radio ',
        url: 'http://emf.streamguys1.com/sk005_mp3_high_web',
        img: K_LOVE
    },
    {
        id: 6,
        name: 'Road Radio',
        url: 'http://s4.radioboss.fm:8101/stream',
        img: road
    },
    {
        id: 7,
        name: 'KCRW',
        url: 'http://kcrw.streamguys1.com/kcrw_192k_mp3_on_air',
        img: KCRW
    }]


export default RadioStations;
