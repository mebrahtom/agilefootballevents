import React, { Component } from 'react'
import { Form, FormGroup, FormControl, Button, Col, ControlLabel } from 'react-bootstrap'
class AdminRegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            email: '',
            password: '',
            passwordconf: '',
            message: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.adminRegister = this.adminRegister.bind(this);
    }
    validateInput(){
        let errors = {};
        let formIsValid = true;
        if (!this.state.fname) {
            formIsValid = false;
            errors["fname"] = "First name is required";
        }
        if (!this.state.lname) {
            formIsValid = false;
            errors["lname"] = "Last name is required";
        }
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "Email is required";
        }
        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "Password is required";
        }
        if (!this.state.passwordconf) {
            formIsValid = false;
            errors["passwordconf"] = "Confirm password";
        }
        if (this.state.password !== this.state.passwordconf) {
            formIsValid = false;
            errors["match"] = "Password does not match";
        }
        if (typeof this.state.email !== "undefined") {
            let lastAtPos = this.state.email.lastIndexOf('@');
            let lastDosPos = this.state.email.lastIndexOf('.');
            if (!(lastAtPos < lastDosPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDosPos > 2 && (this.state.email.length - lastDosPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }
        }
        if (typeof this.state.fname !== "undefined") {
            if (!this.state.fname.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["fname"] = "First name must contain only letters";
            }
        }
        if (typeof this.state.lname !== "undefined") {
            if (!this.state.lname.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["lname"] = "Last name must contain only letters";
            }
        }
        this.setState({ errors: errors });
        return formIsValid;
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    adminRegister(e) {
        e.preventDefault();
        const data = {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            passwordconf: this.state.passwordconf
        }

        if (this.validateInput()) {
            fetch("http://localhost:8000/register", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(response => {
                    if (response) {
                        this.setState({ message: "Successfully Registered!" });
                    }
                })
        }
    }
    render() {
        const successMessage = {
            color: '#3CB371'
        };
        return (
            <div className="container">
                <h2 style={successMessage}>{this.state.message}</h2>
                <Form horizontal onSubmit={this.adminRegister}>
                    <FormGroup controlId="formHorizontalFName">
                        <Col componentClass={ControlLabel} sm={2}>
                            First Name
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" name="fname" placeholder="First name" value={this.state.fname} onChange={this.onChange} />
                            <span style={{ color: "#cc0000" }}>{this.state.errors["fname"]}</span>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalLName">
                        <Col componentClass={ControlLabel} sm={2}>
                            Last Name
                        </Col>
                        <Col sm={6}>
                            <FormControl type="text" name="lname" placeholder="Last name" value={this.state.lname} onChange={this.onChange} />
                            <span style={{ color: "#cc0000" }}>{this.state.errors["lname"]}</span>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>
                        <Col sm={6}>
                            <FormControl type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.onChange} />
                            <span style={{ color: "#cc0000" }}>{this.state.errors["email"]}</span>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={6}>
                            <FormControl type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this.onChange} />
                            <span style={{ color: "#cc0000" }}>{this.state.errors["password"]}</span>
                        </Col>
                    </FormGroup>
                    <FormGroup controlId="formHorizontalConfirmPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Confirm Password
                        </Col>
                        <Col sm={6}>
                            <FormControl type="password" name="passwordconf" placeholder="Repeat password" onChange={this.onChange} />
                            <span style={{ color: "#cc0000" }}>{this.state.errors["passwordconf"]}</span>
                            <span style={{ color: "#cc0000" }}>{this.state.errors["match"]}</span>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col smOffset={2} sm={6}>
                            <Button type="submit" id="submit"> Register</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default AdminRegistrationForm;