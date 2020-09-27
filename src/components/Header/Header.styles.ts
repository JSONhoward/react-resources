import styled, {keyframes} from 'styled-components'

const spinAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`

export const StyledHeader = styled('header')`
position: sticky;
display: flex;
justify-content: space-between;
top: 0;
height: 4rem;
width: 100%;
background: ${({theme: {ReactDark}}) => ReactDark};
z-index: 2;
`

export const Logo = styled('div')`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 300px;
color: ${({theme: {ReactPrimary}}) => ReactPrimary};

svg {
    animation: ${spinAnimation} 15s linear infinite;
}

p {
    font-weight: bold;
    margin: .5rem;
    font-size: 1.5rem;
}

a, a:visited, a:active {
    color: ${({theme: {ReactPrimary}}) => ReactPrimary};
    text-decoration: none;
}
`

export const Li = styled('li')<{active: boolean}>`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
text-align: center;
height: 100%;
font-size: 1.25rem;
border-bottom: ${({active, theme: {ReactPrimary}}) => active ? `2px solid ${ReactPrimary}` : 'none'};

&:hover {
    opacity: .75;
}
`

export const Nav = styled('nav')`
position: absolute;
left: 50%;
transform: translateX(-50%);
height: 100%;
width: 500px;
color: white;
margin-right: 5rem;

ul {
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    list-style: none;
}

a, a:visited, a:active {
    text-decoration: none;
    color: white;
}
`

export const GithubLink = styled('div')`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 10rem;
color: white;
font-size: .9rem;

svg {
    color: #5A5B5D;
    margin: 5px;
}
`