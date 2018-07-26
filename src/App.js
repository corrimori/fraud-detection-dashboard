import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import './App.css';
import PageComponent from './components/PageComponent'

class App extends Component {
  state = {
    events: [
      {
        "eventId": 1,
        "eventName": "Music Concert",
        "description": "You are learning react!!",
        "orgName": "Disney",
        "country": "US",
        "saved": false,
        "labels": "Fraud"
      },
      {
        "eventId": 2,
        "eventName": "Outdoors Market",
        "description": "Hello!",
        "orgName": "Food Imperfect",
        "country": "US",
        "investigate": true,
        "labels": "Fraud"
      },
      {
        "eventId": 3,
        "eventName": "Dancing with the Stars",
        "description": "Yipee!",
        "orgName": "Dance Dance",
        "country": "UK",
        "saved": false,
        "labels": "low-risk"
      }
    ]
  }

  toggleSaved = (id) => {
    console.log('here in toggleSaved function');
    // for the event that has the id of the clicked on event, change the opposite, true to false
    // set state with new messages
    let events = this.state.events.map( event => {
      if ( id === event.id ) {
        event.saved = !event.saved
      }
      return
    })

    // this.setState(events)
    this.setState({...this.state.events, events})

  }

  render() {
    return (
      <div>
        <PageComponent
          toggleSaved = {this.toggleSaved}
          events = {this.state.events}
        />
        <p />
        <Button color='green'>Get New Alerts</Button>
      </div>
    );
  }
}

export default App;
