import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import TableApp from '../Components/TableApp'

export default class Detail extends Component {
    constructor(){
        super();
        this.state= {
            data: JSON.parse(localStorage.getItem("data")),
            itemSelected: {},
        }
      }
      componentDidMount() {
        this.renderDetail();
      }
      renderDetail = () => {
        let id = this.props.match.params.idItem;
        let itemSelected = this.state.data.find((item) => {
            return item.id === id;
        });
        this.setState({
            itemSelected,
        })
      }
      
  render() {
    const {itemSelected} = this.state; 
    console.log(this.props.match.params.idItem)
    console.log(this.state)
      
    return (
        <div>
            <ul>
                <li>{itemSelected.id}</li>
                <li>{itemSelected.username}</li>
                <li>{itemSelected.name}</li>
            </ul>
        </div>
    )
  }
}
