import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            keyword: '', 
        }
    }
    setValue = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        this.setState({
            [name]:value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.search(this.state.keyword)
    }
    render(){
        const {keyword} = this.state;
        return (
          <div>
               <Form className="mb-3" onSubmit={this.onSubmit}>
                      <Row>
                          <Col xs={6}>
                              <Form.Group className="mb-3" controlId="formBasicEmail">
                              <Form.Control type="text" placeholder="Search..." name='keyword' value={keyword} onChange={this.setValue}/>
                              </Form.Group>
                              <Button variant="primary" type="submit" className='mr-5'>Search</Button>
                          </Col>
                      </Row>
                     
                  </Form>
          </div>
        )
    }
    
}
