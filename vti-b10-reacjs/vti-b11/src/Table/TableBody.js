import React,{Component} from "react";
import TableRow from './TableRow';


export default function TableBody(props) {
    return(
        <>
            <tbody>
                <TableRow dataArray={props.dataInfo}></TableRow>
            </tbody>
        </>
    )
}