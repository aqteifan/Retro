import React, { Component } from 'react';
import logo from '../logo.svg';
import '../css/App.css';
import '../css/bootstrap/bootstrap.css';
import DefaultRetro from '../components/Default.js';
import PigsRetro from '../components/Pigs.js';
import RetroBackground from '../content/images/default.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retroStyle: ""
    };

    this.renderRetroStylePage = this.renderRetroStylePage.bind(this);
  }

  renderRetroStylePage(event) {
    var style = event.target.value;
    if (style === "Default") {
      this.setState({ retroStyle: "Default" });
    } else if (style === "Pigs and Wolf") {
      this.setState({ retroStyle: "Pigs" });
    }
  }
  
  render() {
    const retroList = [
      'Select Retro style',
      'Default',
      'Pigs and Wolf'
    ];
    return (
      <div className="App ">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title ">Welcome to DTE SC Retro application</h1>
        </header>
        <img src = {RetroBackground} alt=""/>
        <select id='retro-select' className='form-control'>
          {
            retroList.map(retroStyle => {
              return (
                <option key={retroStyle} onClick={this.renderRetroStylePage}>
                  {retroStyle}
                </option>
              );
            })
          }
        </select>
        {(() => {
          switch (this.state.retroStyle) {
            case "Default": return <DefaultRetro />;
            case "Pigs": return <PigsRetro />;
          }
        })()}

      </div>
    );
  }
}

export default App;
