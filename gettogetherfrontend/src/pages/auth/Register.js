import React, {Component} from 'react';
import HomeNavBar from "../../components/navbar/HomeNavBar";
import Div, {DivContainer, SignUpFlexContainer} from "../../styled/Div";
import styled from "styled-components";
import {FlexBox} from "../../styled/styles";
import SignUpForm from "../../components/auth/SignUpForm";

class Register extends Component {
    render() {
        return (
            // <Div>
            <DivContainer color={"rgb(24, 26, 27)"}>
                <HomeNavBar/>
                <SignUpFlexContainer>
                    <h2>
                        Sign up
                    </h2>
                    <SignUpForm/>
                </SignUpFlexContainer>
                <p>Already a member? </p>
            </DivContainer>
        );
    }
}



export default Register;



