import React, { Component } from 'react';
import '../css/radioStations.css';
import stato from '../stations';

class RadioStations extends Component {
  state = {
    searchArray: []
  }
  dataSearch = e => {
    if (e.target.value) {
      const value = e.target.value.toLowerCase();
      const filter = stato.items.map(item => {
        return item.name.toLowerCase().includes(value);         
      })    
      this.setState({searchArray: filter});
    } else {
      this.setState({searchArray: []});
    }    
  };
  render () {
    return(
      <React.Fragment>
        <div className="list__station">
          <h2 className="list__station_title">Radio stations:</h2>
          <ul className="list__radio-station">            
            {
              stato.items.map((item, i) => (                
                <li key={i}  onClick={() => { this.props.chooseStation(item.name, item.url, item.img) }}>
                  <div className={this.state.searchArray[i] ? "station include" : "station"}>
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


export default RadioStations;
