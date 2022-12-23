import React, {Component } from "react";
export default class Count extends Component {
    render(){
        // console.log(this.props)
        return (
            <div>
                <button onClick={this.props.prev}>Giảm</button>
                <button onClick={this.props.next}>Tăng</button>
               
            </div>
        )
    }
}