import React, {Component} from 'react';
import {FlexBox, setFlex, setRem} from "../../styled/styles";
import styled from "styled-components";
import Hero from "../../styled/Hero.css";
import StyledRouterLinkWrapper from "../../styled/globals/styledRouterLink";

class HeroHome extends Component {
    render() {
        return (
            <Hero>
                <FlexBox x={"space-between"}>
                    <div>
                        Logo
                    </div>
                    <FlexBox z={"column"} className={"auth-headers"}>

                            <StyledRouterLinkWrapper to={'/login'} linkName={"Login"}/>


                            <StyledRouterLinkWrapper to={'/register'} linkName={"Register"}/>
                
                    </FlexBox>
                </FlexBox>
            </Hero>
        );
    }
}

const HeroContainerWrapper = styled(HeroHome)`
    .auth-headers a{
      padding:${setRem(30)};
      font-size: ${setRem(25)};
    }
`


export default HeroContainerWrapper;