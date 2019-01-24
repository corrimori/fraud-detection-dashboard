import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import PageComponent from './components/PageComponent';

class App extends Component {
  state = {
    events: [
      {
        country: 'US',
        event_created: 1358973361,
        name: 'Tenth Annual Immunize Nebraska Conference',
        id: 5306628,
        prediction: 'Green',
        probability: 0.0,
        saved: false,
      },
      {
        country: 'US',
        event_created: 1359052493,
        name: "Rebelution at Wooly's - Wednesday April 17th, 2013  - Ages 16+",
        id: 5316692,
        prediction: 'Yellow',
        probability: 0.74,
        saved: false,
      },
      {
        country: 'US',
        event_created: 1361617313,
        name: 'Hunger Games: Catching Fire Exclusive Preview #1',
        id: 5600828,
        prediction: 'Red',
        probability: 1.0,
        saved: false,
      },
      {
        country: 'CA',
        event_created: 1359490099,
        name: 'PROGRAM: Being You, Inspiring Others *Early Bird (20 April)*',
        id: 5360652,
        prediction: 'Green',
        probability: 0.0,
        saved: false,
      },
      {
        country: 'US',
        event_created: 1359574186,
        name:
          'Horseback Riding on the Beach & #HorseSurfing in FL - 2 TICKETS LEFT!',
        id: 5372208,
        prediction: 'Green',
        probability: 0.0,
        saved: false,
      },
      {
        country: 'GB',
        event_created: 1359909172,
        name: 'Valentines Weekend Dinner',
        id: 5404222,
        prediction: 'Yellow',
        probability: 0.94,
        saved: false,
      },
      {
        country: 'US',
        event_created: 1359915373,
        name: "Dance Like Nobody's Watching (& Dance Party)",
        id: 5404658,
        prediction: 'Green',
        probability: 0.01,
        saved: false,
      },
      {
        country: 'US',
        event_created: 1359916094,
        name: 'An Intimate Night w/ Govinda : 2.22 : Foundation Room (HOB) ',
        id: 5404706,
        prediction: 'Green',
        probability: 0.0,
        saved: false,
      },
      {
        country: 'US',
        event_created: 1360625505,
        name:
          'El Rancho De Concord, Presenta: Banda Maguey * Fito Olivares (14 De Febrero)',
        id: 5468256,
        prediction: 'Green',
        probability: 0.02,
        saved: false,
      },
    ],

    // sample data while developing
    // events: [
    //   {
    //     "id": 1,
    //     "probability": .92,
    //     "priority": "Red",
    //     "name": "Music Concert",
    //     "country": "US",
    //     "saved": true
    //   },
    //   {
    //     "id": 2,
    //     "probability": .50,
    //     "priority": "Green",
    //     "name": "Outdoor Farmer Market",
    //     "country": "UK",
    //     "saved": false
    //   }
    // ]
  };

  componentDidMount() {
    console.log('in component did mount...');
    fetch('http://107.22.115.226:3333/inference')
      .then(response => response.json())
      .then(events => {
        let newEvents = events.map(event => {
          return {
            id: event.object_id,
            probability: event.probability,
            prediction: event.prediction,
            name: event.name,
            country: event.country,
            saved: false,
          };
        });
        this.setState({ events: newEvents });
        // console.log(this.state.events, '<<<<<<EVENTS IN STATE');
      });
  }

  // for the event that has the id of the clicked on event, change the opposite, true to false
  // set state with new messages
  toggleSaved = id => {
    let events = this.state.events.map(event => {
      console.log(event.id, 'event.id');
      console.log(id, 'ID');

      if (event.id === id) {
        event.saved = !event.saved;
      }
      return event;
    });

    // this.setState(events)
    this.setState({ ...this.state.events, events });
  };

  render() {
    return (
      <div>
        <PageComponent
          toggleSaved={this.toggleSaved}
          events={this.state.events}
        />
        <p />
        <Button color="green">Get New Alerts</Button>
      </div>
    );
  }
}

export default App;

// ****************** generic API call ************************

// componentDidMount() {
//   fetch('http://107.22.115.226:3333/inference')
//     .then(response => response.json())
//     .then(data => this.setState({ data }));
// }
//
// console.log(data)

// const getData = async (e) => {
//   e.preventDefault()
//   const api_call = await fetch('http://107.22.115.226:3333/inference')
//   const data = await api_call.json()
//   console.log('data', data);
//   //set State   this.setState
// }
