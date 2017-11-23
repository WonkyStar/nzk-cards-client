require('../styles/app.css')
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <div id='app-bg' />
        <div id='app-inner'>
        <div id='add-card-container'>
          <div id='add-card-button'>
            +
          </div>
        </div>
        </div>
      </div>
    )
  }
}
