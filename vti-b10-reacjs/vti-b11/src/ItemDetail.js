import React, {Component} from 'react';

export default class ItemDetail extends Component {
    render() {
        console.log(this.props.itemRenderUI, "test");
        return(
            <div>
                <p>Info</p>
            </div>
        );
    }
}