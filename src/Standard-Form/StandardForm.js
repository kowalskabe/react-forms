import React, { Component } from "react";

function ValidationMessage(props){
    if(!props.valid){
        return(
            <div className="alert-danger" role="alert">
                {props.message}
            </div>
        )
    }
    return null;
}

class StandardForm extends Component{
    state = {
      username: '',
      usernameValid: false,
      email:'', emailValid: false,
      password: '', passwordValid: false,
      passwordConfirm: '', passwordConfirmValid: false,
      formValid: false,
      errorMsg: {}
    };

    // validate form
    validateForm = () => {
        const {usernameValid, emailValid, passwordValid, passwordConfirmValid} = this.state;
        this.setState({
            formValid: usernameValid && emailValid && passwordValid && passwordConfirmValid
          })
    };

    // validate username
    validateUsername = () => {
        const {username} = this.state;
        let usernameValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (username.length < 6 || username.length > 15){
            usernameValid = false;
            errorMsg.username = "Username should be between 6 and 15 characters";
        }

        this.setState({usernameValid,errorMsg}, this.validateForm);
    };

    // validate email
    validateEmail = () => {
        const {email} = this.state;
        let emailValid = true;
        let errorMsg = {...this.state.errorMsg};

        if(!/^[^\s@]+@[^\s]+\.[^s@]+$/.test(email)) {
            emailValid = false;
            errorMsg.email ="Invalid email format";
        }

        this.setState({emailValid, errorMsg}, this.validateForm);
    };

    // validate password
    validatePassword = () => {
        const {password} = this.state;
        let passwordValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (password.length < 8){
            passwordValid =false;
            errorMsg.password = "Password should have at least 8 characters";
        }

        this.setState({passwordValid, errorMsg}, this.validateForm);
    };

    // confirm password
    validateConfirmPassword = () => {
        const {passwordConfirm, password} = this.state;
        let passwordConfirmValid = true;
        let errorMsg = {...this.state.errorMsg};

        if (password !== passwordConfirm){
            passwordConfirmValid = false;
            errorMsg.passwordConfirm = "Passwords do not match";
        }

        this.setState({passwordConfirmValid, errorMsg}, this.validateForm);
    };

    //reset form
    resetForm(){
        this.setState({
            username: '',
            usernameValid: false,
            email:'', emailValid: false,
            password: '', passwordValid: false,
            passwordConfirm: '', passwordConfirmValid: false,
            formValid: false,
            errorMsg: {}
        })
    }

    render(){
        return(
            <div>
                <h3>Standard Form</h3>
                <form>
                    {/* Username */}
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" id="username"
                               value={this.state.username}
                               onChange={(e) =>
                                   this.setState({username: e.target.value},
                                   this.validateUsername)}/>
                        <span><ValidationMessage
                                valid={this.state.usernameValid}
                                message={this.state.errorMsg.username}
                            /></span>
                    </div>
                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" id="email"
                               value={this.state.email}
                               onChange={(e) =>
                                   this.setState({email: e.target.value},
                                   this.validateEmail)}/>
                        <span><ValidationMessage
                                valid={this.state.emailValid}
                                message={this.state.errorMsg.email}
                            /></span>
                    </div>
                    {/* Password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password"
                               value={this.state.password}
                               onChange={(e) =>
                                   this.setState({password: e.target.value},
                                   this.validatePassword)}/>
                        <span><ValidationMessage
                                valid={this.state.passwordValid}
                                message={this.state.errorMsg.password}
                            /></span>
                    </div>
                    {/* Password confirmation */}
                    <div className="form-group">
                        <label htmlFor="username">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPassword"
                               value={this.state.passwordConfirm}
                               onChange={(e) =>
                                   this.setState({passwordConfirm: e.target.value},
                                   this.validateConfirmPassword)}/>
                        <span><ValidationMessage
                                valid={this.state.passwordConfirmValid}
                                message={this.state.errorMsg.passwordConfirm}
                            /></span>
                    </div>
                    <div className="row">
                        <div className="col-6"></div>
                        <div className="col-6">
                            <div className="btn-group btn-group-lg py-3 align-self-center" id="divwithbtns">
                                <button className="btn btn-primary" type="submit" disabled={!this.state.formValid}>Submit</button>
                                <button className="btn btn-danger" onClick={this.resetForm = this.resetForm.bind(this)}>Reset</button>
                            </div>
                        </div>
                    </div>

                </form>
                <p>
                    Username:
                    {this.state.username}
                </p>
                <p>
                    Email:
                    {this.state.email}
                </p>
                <p>
                    Password:
                    {this.state.password}
                </p>
            </div>
        );
    }
}
export default StandardForm;