require('../styles/app.css')
import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div id='app'>
        <div id='app-bg' />
        <div id='app-inner'>
          <h1>NZK Cards</h1>
        </div>
      </div>
    )
  }
}