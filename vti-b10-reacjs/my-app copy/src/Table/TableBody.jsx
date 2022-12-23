
import React from 'react'
import TableRow from './TableRow';

export default function TableBody(props) {
    // console.log(props.arrInfo[0])
  return (
    <>
    <tbody>
       <TableRow dataArr={props.arrInfo} />
    </tbody>    
    </>
  )
}
