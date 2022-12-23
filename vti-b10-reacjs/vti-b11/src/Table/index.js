import React,{Component} from "react";
import TableHeader from './TableHeader';
import TableBody from './TableBody';

export default class Table extends Component {
    render() {
        const {arrInfo, tableHeader } = this.props;
        return(
            <table>
                <TableHeader tableHeader={tableHeader}></TableHeader>
                <TableBody arrInfo={arrInfo}></TableBody>
            </table>
        )
    }
}