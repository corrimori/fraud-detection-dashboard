import React from 'react'
import { Table, Icon, Label } from "semantic-ui-react";

const TableRow = (props) => {

let _handleToggleSaved = event => {
    event.preventDefault();
    props.toggleSaved(props.event.id)
  }

  // <Table.Cell className={`${props.event.probability >= .90 ? 'error':''} ${props.event.probability < .80 ? 'success':''}`}>
  //   <Icon className='warning sign' size='large' color='red' />

        // <Table.Cell className={`${props.event.probability >= .90 ? 'error':''} ${props.event.probability < .70 ? 'warning':''}`}>{props.event.name}</Table.Cell>

  return (
    <Table.Row>

      <Table.Cell>
        {props.event.id}
      </Table.Cell>

      <Table.Cell>
        {props.event.probability}
      </Table.Cell>

      <Table.Cell>
        <Label color={props.event.prediction.toLowerCase()} tag>
          {props.event.prediction}
        </Label>
      </Table.Cell>

      <Table.Cell className={`${props.event.probability >= .90 ? 'error':''} ${props.event.probability > .70 && props.event.probability < .90 ? 'warning':''}`}>
        {props.event.name}
      </Table.Cell>

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

// <Icon className={`'warning sign' size='large' ${props.event.probability >= .90 ? "color='red'": "color='orange'"}`} />
