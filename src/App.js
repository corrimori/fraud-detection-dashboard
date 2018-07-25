import React, { Component } from 'react';
import {Button} from 'semantic-ui-react'
import './App.css';

class App extends Component {
  state = {
    messages: [
      {
        "event_id": 1,
        "description": "You can't input the protocol without calculating the mobile RSS protocol!",
        "facebook": false,
        "starred": true,
        "labels": ["high", "medium"]
      },
      {
        "id": 2,
        "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
        "read": false,
        "starred": false,
        "selected": true,
        "labels": []
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Button>Click Here</Button>
      </div>
    );
  }
}

export default App;
