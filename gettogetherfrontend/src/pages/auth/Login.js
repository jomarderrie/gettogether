import React, {Component} from 'react';
import HomeNavBar from "../../components/navbar/HomeNavBar";
import SignUpForm from "../../components/auth/SignUpForm";
import {DivContainer, SignUpFlexContainer} from "../../styled/Div";
import LoginForm from "../../components/auth/LoginForm";

class Login extends Component {
    render() {
        return (
            <DivContainer color={"rgb(24, 26, 27)"}>
                <HomeNavBar/>
                <SignUpFlexContainer>
                    <h2>
                        Login
                    </h2>
                    <LoginForm/>
                </SignUpFlexContainer>
            </DivContainer>
        );
    }
}

export default Login;