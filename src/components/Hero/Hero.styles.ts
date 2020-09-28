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

export const Subtitle = styled('p')`
color: white;
font-size: 1.5rem;
z-index: 1;
margin-top: .5rem;

@media screen and (max-width: 600px) {
    font-size: .75rem;
}
`