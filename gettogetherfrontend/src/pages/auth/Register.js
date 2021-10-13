import React, {Component} from 'react';
import HomeNavBar from "../../components/navbar/HomeNavBar";
import Div from "../../styled/Div";
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
            </DivContainer>
        );
    }
}

const SignUpFlexContainer = styled(FlexBox)`
  color: white;

  h2 {

    font-size: 40px;
  }

  flex-direction: column;
`

const DivContainer = styled(Div)`
  height: 100vh;
`


export default Register;



