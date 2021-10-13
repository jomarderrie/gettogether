import React from 'react'
import Logo from "../images/logo.jpg";
import styled from "styled-components";

export const Image = ({logo,height='auto', width}) => {
    return (<img src={logo} height={height} width={width}/>)

}



