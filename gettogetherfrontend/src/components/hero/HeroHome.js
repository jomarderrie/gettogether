import React, {Component} from 'react';
import {FlexBox, setFlex, setRem} from "../../styled/styles";
import styled from "styled-components";
import Hero from "../../styled/Hero.css";
import StyledRouterLinkWrapper from "../../styled/globals/StyledRouterLink";

const HeroHome = () => {
    return (
        <div>
            <Hero>
                <FlexBox x={"space-between"}>
                    <div>
                        Logo
                    </div>
                    <FlexBox z={"row"} style={{paddingTop: '20px'}}>
                        <StyledRouterLinkWrapper to={'/login'} linkName={"Log in"} p={"home-link"}/>
                        <StyledRouterLinkWrapper to={'/register'} linkName={"Sign up"} p={"home-link"}/>
                    </FlexBox>
                </FlexBox>

                <div>
                    <div>
                        <h2>Dive in! There are so many things to do on GetTogether</h2>
                    </div>
                    <div>
                        <h3>
                            Join a group to meet people, make friends, find support, grow a business, and explore your
                            interests. Thousands of events are happening every day, both online and in person!
                        </h3>
                    </div>
                </div>
            </Hero>

        </div>
    );

}

const HeroContainerWrapper = styled(HeroHome)`

`


export default HeroContainerWrapper;