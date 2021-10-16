import styled from 'styled-components';
import {FlexBox, setRem} from "./styles"
const Div = styled.div`
	padding: ${setRem(64)} | 0;
	background: ${(props) => props.color};
`;

export const SignUpFlexContainer = styled(FlexBox)`
  color: white;

  h2 {

    font-size: 40px;
  }

  flex-direction: column;
`

export const DivContainer = styled(Div)`
  height: 100vh;
`


export default Div;
