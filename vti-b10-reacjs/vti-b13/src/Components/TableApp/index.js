import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import TableBody from './TableBody';
import TableHead from './TableHead';

export default class index extends Component {
    
  render() {
    const {dataApp} = this.props;
    // console.log(this.props.dataApp)
    return (
      <div id="table-app">
        <Table>
            <TableHead></TableHead>
            <TableBody 
            dataTable={dataApp}
            handleEditApp = {this.props.handleEdit}
            ></TableBody>
        </Table>
    </div>
    )
  }
}

