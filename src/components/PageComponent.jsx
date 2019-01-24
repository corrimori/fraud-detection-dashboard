import React from 'react';
import { Header } from 'semantic-ui-react';
import TableComponent from './TableComponent';

const PageComponent = props => {

  return (
    <div>
      <Header as="h3" block>
        <i className="shield alternate icon" />
        First Alert Fraud Detection
      </Header>
      <TableComponent toggleSaved={props.toggleSaved} events={props.events} />
    </div>
  );
};

export default PageComponent;
