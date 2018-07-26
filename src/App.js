import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import './App.css';
import PageComponent from './components/PageComponent'

class App extends Component {
  state = {
    events: [
      // {
      //   "id": 1,
      //   "eventName": "Music Concert",
      //   "description": "You are learning react!!",
      //   "orgName": "Disney",
      //   "country": "US",
      //   "saved": false,
      //   "labels": "Fraud"
      // },
      // {
      //   "id": 2,
      //   "eventName": "Outdoors Market",
      //   "description": "Hello!",
      //   "orgName": "Food Imperfect",
      //   "country": "US",
      //   "saved": false,
      //   "labels": "Fraud"
      // },
      // {
      //   "id": 3,
      //   "eventName": "Dancing with the Stars",
      //   "description": "Yipee!",
      //   "orgName": "Dance Dance",
      //   "country": "UK",
      //   "saved": false,
      //   "labels": "low-risk"
      // }
    ]
  }

componentDidMount(){
  fetch('http://107.22.115.226:3333/inference', {
    headers: {
      "Content-Type": 'application/json'
    }
  }).then(response=>response.json()).then(events=> {
    return events.map(event=> {
      console.log(event, 'EVENT')
      return {
        id: event.object_id,
        saved: false,
        description: 'hello this is a description',
        country: event.country,
        percentage: 40,
        probability: event.probability,
        orgName:'name of org'
      }
    })
      this.setState({events:events})
      console.log(this.state.events, 'EVENTS IN STATE')
  })

}
  // const getData = async (e) => {
  //   e.preventDefault()
  //   const api_call = await fetch('http://107.22.115.226:3333/inference')
  //   const data = await api_call.json()
  //   console.log('data', data);
  //   //set State   this.setState
  // }

  toggleSaved = (id) => {
    console.log(this.state.events, '  EVENTS IN STATE')
    console.log(id, 'ID here in toggleSaved function');
    // for the event that has the id of the clicked on event, change the opposite, true to false
    // set state with new messages
    let events = this.state.events.map( event => {
      console.log(event.id, 'event.id')
      console.log(id, 'ID')

      if ( event.id===id) {
        event.saved = !event.saved
      }
      return event
    })

    // this.setState(events)
    this.setState({...this.state.events, events})
    console.log("new events array", events)
  console.log('state events', this.state.events)
  console.log('...state events', ...this.state.events)
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
