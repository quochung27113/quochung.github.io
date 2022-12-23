import React,{Component} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import randomstring from 'randomstring'

export default class FormApp extends Component {
    constructor(){
        super();
        this.state = {
            username: '',
            name: '',
            age: "",
            classNameApp : '',
        }
    }
    componentDidMount() {
    }

    componentDidUpdate(prevProps) {
        // console.log(prevProps);
        if (this.props.itemSelected !== prevProps.itemSelected) {
            const {username, name, age, classNameApp} = this.props.itemSelected
            this.setState({
                username,
                name,
                age,
                classNameApp,
            })
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
        // console.log(this.state)
        this.props.submitForm({id:randomstring.generate(3), ...this.state});
    }
    render() {
        const {username, name, age, classNameApp} = this.state;
        return(
            <Form className="mb-3" onSubmit={this.onSubmit}>
                <Row>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name='username' value={username} onChange={this.setValue}/>
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" name='name' value={name} onChange={this.setValue} />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Age</Form.Label>
                            <Form.Control type="text" placeholder="Enter age" name='age' value={age} onChange={this.setValue}  />
                            </Form.Group>
                    </Col>
                    <Col xs={6}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Class</Form.Label>
                            <Form.Control type="text" placeholder="Enter class" name='classNameApp' value={classNameApp} onChange={this.setValue} />
                            </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit" className='mr-5'>
                     Submit
                </Button>
                <Button variant="success" >
                     Update
                </Button>
            </Form>
        )
    }
}