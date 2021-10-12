import React, {Component} from 'react';
import {FlexBox, setFlex, setRem} from "../../styled/styles";
import styled from "styled-components";
import Hero from "../../styled/Hero.css";
import StyledRouterLinkWrapper from "../../styled/globals/styledRouterLink";

const HeroHome = () => {
    return (
        <Hero>
            <FlexBox x={"space-between"}>
                <div>
                    Logo
                </div>
                <FlexBox z={"column"} style={{paddingTop:'20px'}}>
                        <StyledRouterLinkWrapper to={'/login'} linkName={"Login"} p={"home-link"}/>

                        <StyledRouterLinkWrapper to={'/register'} linkName={"Register"} p={"home-link"}/>
                </FlexBox>
            </FlexBox>
        </Hero>
    );

}

const HeroContainerWrapper = styled(HeroHome)`

`


export default HeroContainerWrapper;