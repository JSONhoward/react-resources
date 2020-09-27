import styled from "styled-components";

export const StyledHero = styled('div')`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 425px;
width: 100%;
background: ${({theme: {ReactSecondary}}) => ReactSecondary};
overflow: hidden;
`