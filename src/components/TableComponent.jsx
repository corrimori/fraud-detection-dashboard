import React from "react";
import { Table, Icon } from "semantic-ui-react";
import TableRow from './TableRow'

const TableComponent = (props) => (
    <Table striped fixed>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>Event Id</Table.HeaderCell>
          <Table.HeaderCell width={3}>Event Name</Table.HeaderCell>
          <Table.HeaderCell width={6}>Event Description</Table.HeaderCell>
          <Table.HeaderCell width={2}>Country</Table.HeaderCell>
          <Table.HeaderCell width={1}>Save</Table.HeaderCell>
        </Table.Row>
      </Table.Header>


      <Table.Body>
        {props.events.map(event => {
            return <TableRow toggleSaved={props.toggleSaved} event = {event}/>
          }
        )}

      </Table.Body>
    </Table>
);

export default TableComponent;

// eventsRow = props.events.map( (evnt) => {
//   console.log(evnt)
