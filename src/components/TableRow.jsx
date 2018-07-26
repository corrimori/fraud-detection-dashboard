import React from 'react'
import { Table, Icon, Label } from "semantic-ui-react";

const TableRow = (props) => {
  //console.log(props.event.description, 'props')

let _handleToggleSaved = event => {
    event.preventDefault();

    console.log('props', props.event.id);
    console.log('event', event);

    //console.log("toggle saved function", toggleSaved)
    console.log("toggle saved function off of props", props.toggleSaved)

    props.toggleSaved(props.event.id)
  }

  return (
    <Table.Row>
      <Table.Cell>{props.event.id}</Table.Cell>
      <Table.Cell>{props.event.probability}</Table.Cell>
      <Table.Cell error>
        <Icon name='attention' />
        {props.event.eventName}
      </Table.Cell>
      <Table.Cell>{props.event.country}</Table.Cell>
      <Table.Cell>
        {props.event.country}
      </Table.Cell>
      <Table.Cell>
        <button className={`circular ui toggle compact icon ${props.event.saved ? 'orange':''} button`}>
          <i className="check icon"
          onClick={_handleToggleSaved}></i>
        </button>
      </Table.Cell>
    </Table.Row>
  )
}

export default TableRow

//  <`Table.Cell ${fraud?? 'error': ''`>

//${props.event.investigate ? 'orange':''} button`}>
  // <i class="check icon"

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
