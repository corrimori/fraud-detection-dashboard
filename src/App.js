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
        "investigate": false,
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
        "investigate": false,
        "labels": "low-risk"
      }
    ]
  }


  toggleInvestigateHandler = (evnt) => {
    console.log('here in toggle investigate', evnt); // id of clicked star
    evnt.investigate = !evnt.investigate
    console.log('evnt.investigate after switch', evnt.investigate); //true
    this.setState(this.state.evnt.investigate)
  }

  render() {
    return (
      <div>
        <PageComponent
          events = {this.state.events}
          toggleInvestigateHandler = {this.toggleStarHandler}
        />
        <Button color='green'>Get New Alerts</Button>
      </div>
    );
  }
}

export default App;
