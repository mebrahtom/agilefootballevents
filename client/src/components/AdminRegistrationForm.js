import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap'
class AdminRegistrationForm extends Component {
    constructor(props){
        super(props)
        this.state={
            fname:'',
            lname:'',
            email:'',
            password:'',
            passwordconf:'',
            message:'',

        }
        //this.handleSubmit=this.handleSubmit().bind(this);
    }
    
    adminRegister(){
       //e.preventDefault()                                                                                           `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````   `
        var data={
            fname:this.state.fname,
            lname:this.state.lname,
            email:this.state.email,
            password:this.state.password,
            passwordconf:this.state.passwordconf
        }
        fetch("http://localhost:8000/register",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(response=>response.json()).then(response=>{
            console.log('Response',response);
            /*if(response.success){
                this.setState({

                })
            }
            else{
                this.setState({

                })
            }*/
        })
    }
    render() {
        return (
            <div className="container">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalFName">
                        <Col componentClass={ControlLabel} sm={2}>
                            First Name
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="First name" value={this.state.fname} onChange={e=>this.setState({fname:e.target.value})} />
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalLName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Last Name
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" placeholder="Last name" value={this.state.lname} onChange={e=>this.setState({lname:e.target.value})} />
                        </Col>
                    </FormGroup>
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
                    <FormGroup controlId="formHorizontalConfirmPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Confirm Password
                        </Col>
                        <Col sm={6}>
                            <FormControl type="password" placeholder="Repeat password"  onChange={e=>this.setState({passwordconf:e.target.value})} />
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={6}>
                            <Button type="submit" id="submit" onClick={()=>this.adminRegister()}> Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default AdminRegistrationForm;