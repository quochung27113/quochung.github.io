import React,{Component} from "react";

export default class Info extends Component {
    render() {
        const {fullName, age} = this.props
        return(
            <div>
                <h1>Full name : {fullName}</h1>
                <span>Age : {age}</span>
            </div>
        )
    }
}