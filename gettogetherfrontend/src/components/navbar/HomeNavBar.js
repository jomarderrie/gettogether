import React from 'react'
import {FlexBox, setRem} from "../../styled/styles";
import Logo from "../../images/logo2.jpg"
import styled from "styled-components";
import {Image} from "../../styled/Image";
import {Link} from "react-router-dom";

const HomeNavBar = () => {
    return (
        <HomeNavBarFlexContainer x={"space-between"} y={"flex-end"} style={{padding: '2px 12px'}}>
            <Link to={"/"}>
                <Image logo={Logo} width={64}/>
            </Link>
        </HomeNavBarFlexContainer>
    )
}

const HomeNavBarFlexContainer = styled(FlexBox)`
  img {
    padding: 10px 0;
  }

  border-bottom-color: rgba(140, 130, 115, 0.12);
  border-bottom: 2px solid;
`

export default HomeNavBar;
