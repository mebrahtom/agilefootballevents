import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap'
class AdminLoginForm extends Component {
    constructor(props){
        super(props)
        this.state={
            email:'',
            password:'',
            message:'',
            valid:false
        }
        //this.handleSubmit=this.handleSubmit().bind(this);
    }
    
    adminLogin(){
       //e.preventDefault()                                                                                           `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````   `
        var data={
            email:this.state.email,
            password:this.state.password,
        }
        fetch("http://localhost:8000/login",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(function(response){
            if(response.status>=400){
                throw new Error("Bad response");
            }
            return response.json();
        }).then(function(data){
          //console.log(data)
        }).catch(function(err){
            console.log(err);
        });
    }
    render() {
        return (
            <div className="container">
                <Form horizontal>
                   
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={6}>
                            <FormControl type="email" placeholder="Email" value={this.state.email} onChange={e=>this.setState({email:e.target.value})} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={6}>
                            <FormControl type="password" placeholder="Enter password" value={this.state.password} onChange={e=>this.setState({password:e.target.value})} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={6}>
                            <Button type="submit" id="submit" onClick={()=>this.adminLogin()}> Login</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default AdminLoginForm;