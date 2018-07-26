import React from "react"
import { Header } from 'semantic-ui-react'
import TableComponent from './TableComponent'


const PageComponent = (props) => {

  console.log('props', props);
  console.log('props.events', props.events);
  console.log('props.toggleSaved', props.toggleSaved);


  return (
    <div>
      <Header as='h3' block>
        <i class="shield alternate icon" />
        First Alert Fraud Detection
      </Header>
      <TableComponent
        toggleSaved = {props.toggleSaved}
        events = {props.events}/>
    </div>
  )

}

export default PageComponent
