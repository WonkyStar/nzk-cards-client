require('../styles/app.css')
import React, { Component } from 'react'
import Card from './Card'

export default class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        items: []
      }
    }

  addCard: function() {
      this.setState({
          items: this.state.items.push({})
      });
  },

  render() {
    return (
      <div id='app'>
        <div id='app-bg' />
        <div id='app-inner'>
        <div id='add-card-container'>
          <div id='card-list'>
            {this.state.items.forEach()
            }
          </div>
          <div id='add-card-button' onClick={this.addCard.bind(this)}>
            +
          </div>
        </div>
        </div>
      </div>
    )
  }
}
