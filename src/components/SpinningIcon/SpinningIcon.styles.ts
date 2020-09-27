import styled, {keyframes} from 'styled-components';

const spinAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`


export const StyledSpinningIcon = styled('div')`
position: absolute;
top: 13rem;
right: 3rem;
display: flex;
align-items: center;
justify-content: center;
height: 100%;

svg {
    position: relative;
    top: -1rem;
    animation: ${spinAnimation} 15s linear infinite;
}
`