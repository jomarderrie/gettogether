import styled from 'styled-components';

import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import {setRem} from "../styles";

const StyledRouterLink = ({to, linkName, className}) => {
    return (
        <NavLink className={className} to={to}>
            {linkName}
        </NavLink>
    );
}


const StyledRouterLinkWrapper = styled(StyledRouterLink)`
  text-decoration: none;
  font-weight: bolder;
`
export default StyledRouterLinkWrapper;