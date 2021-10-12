import React, {Component} from 'react';
import styled from 'styled-components';
import {setFlex, setBackground} from "../../styled/styles";

const Hero = styled.header`
	 min-height: ${({minHeight}) => minHeight || '100vh'}
	${(props) => setBackground({ img: props.img, color: 'rgba(0,0,0,0)' })};
	${setFlex({ x: 'center', y: 'center' })};
`;

export default Hero;