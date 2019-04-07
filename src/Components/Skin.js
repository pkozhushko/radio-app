import React, { Component } from 'react';
import '../css/skin.css'

class Skin extends Component {
  state = {
    selectedBg: "bg1"
  }
  handleOptionChange = (e) => {
    this.setState({
      selectedBg: e.target.value
    });
  }
  render() {
    return (
          <form className="skin__wrapper">
              <label className="skin__label">
                <input type="radio" value="bg1"
                              style={{display: "none"}}
                              checked={this.state.selectedBg === "bg1"}
                              onChange={this.handleOptionChange}
                              onClick={() => { this.props.updateSkin("bg1")}} />
                            <span></span>Skin 1
              </label>
              <label className="skin__label">
                <input type="radio" value="bg2"
                              style={{display: "none"}}
                              checked={this.state.selectedBg === "bg2"}
                              onChange={this.handleOptionChange}
                              onClick={() => { this.props.updateSkin("bg2")}} />
                            <span></span>Skin 2
              </label>
              <label className="skin__label">
                <input type="radio" value="bg3"
                              style={{display: "none"}}
                              checked={this.state.selectedBg === "bg3"}
                              onChange={this.handleOptionChange}
                              onClick={() => { this.props.updateSkin("bg3")}} />
                            <span></span>Skin 3
              </label>
              <label className="skin__label">
                <input type="radio" value="bg4"
                              style={{display: "none"}}
                              checked={this.state.selectedBg === "bg4"}
                              onChange={this.handleOptionChange}
                              onClick={() => { this.props.updateSkin("bg4")}} />
                            <span></span>Skin 4
              </label>
          </form>
    );
  }
}

export default Skin;
