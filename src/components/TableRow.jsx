import React from 'react'
import { Table, Icon, Label } from "semantic-ui-react";

const TableRow = (props) => {
  console.log(props.event.description, 'props')

let toggleInvestigateHandler = (banana) => {
    //onClick change display if on => off
    console.log('here in toggle investigate', banana); // id of clicked star
    console.log(banana.event.investigate);
    banana.event.investigate = !banana.event.investigate
    console.log('event.investigate after switch', banana.event.investigate); //true
    // this.setState(this.state.banana.investigate)
    // Update setState of event.investigate
  }

  return (
    <Table.Row>
      <Table.Cell>{props.event.eventId}</Table.Cell>
      <Table.Cell error>
        <Icon name='attention' />
        {props.event.eventName}
      </Table.Cell>
      <Table.Cell>{props.event.description}</Table.Cell>
      <Table.Cell>
        {props.event.country}
      </Table.Cell>
      <Table.Cell>
        <button class="circular ui toggle compact icon orange button">
          <i class="check icon"
          onClick={ () => toggleInvestigateHandler(props)}></i>
        </button>
      </Table.Cell>
    </Table.Row>
  )
}

export default TableRow

// <button class="ui compact icon toggle yellow button">
//   <i class="check icon"></i>
// </button>

// toggleInvestigateHandler = (event) => {
//   //onClick change display if on => off
//   console.log('here in toggle investigate', event); // id of clicked star
//   event.investigate = !event.investigate
//   console.log('event.investigate after switch', event.investigate); //true
//   this.setState(this.state.event.investigate)
//   // this.setState({message.starred: !message.starred})
// }
