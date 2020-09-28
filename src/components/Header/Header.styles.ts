import styled, { keyframes } from 'styled-components'

const spinAnimation = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`

export const StyledHeader = styled('header') <{ menuOpen: boolean }>`
position: sticky;
top: 0;
height: ${({ menuOpen }) => menuOpen ? '10rem' : '4rem'};
width: 100%;
background: ${({ theme: { ReactDark } }) => ReactDark};
z-index: 2;
transition: height 1s ease-in-out;
`

export const Logo = styled('div')`
position: absolute;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
height: 4rem;
margin-left: .5rem;
color: ${({ theme: { ReactPrimary } }) => ReactPrimary};

svg {
    animation: ${spinAnimation} 15s linear infinite;
}

p {
    font-weight: bold;
    margin: .5rem;
    font-size: 1.5rem;
}

a, a:visited, a:active {
    color: ${({ theme: { ReactPrimary } }) => ReactPrimary};
    text-decoration: none;
}
`

export const Li = styled('li') <{ active: boolean }>`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
text-align: center;
height: 100%;
font-size: 1.25rem;
border-bottom: ${({ active, theme: { ReactPrimary } }) => active ? `2px solid ${ReactPrimary}` : 'none'};

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

@media screen and (max-width: 1000px) {
    left: 60%;
}

@media screen and (max-width: 800px) {
    display: none;
}
`

export const GithubLink = styled('div')`
position: absolute;
right: 0;
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
width: 10rem;
color: white;
font-size: .9rem;
cursor: pointer;

svg {
    color: ${({ theme: { ReactLightGrey } }) => ReactLightGrey};
    margin: 5px;
}

@media screen and (max-width: 800px) {
    display: none;
}
`

export const MobileMenuButton = styled('button')`
position: absolute;
top: 2rem;
right: 0;
transform: translateY(-50%);
background: transparent;
display: flex;
align-items: center;
justify-content: center;
height: 2rem;
width: 2rem;
border: none;
margin-right: 1rem;
cursor: pointer;

svg {
    color: ${({ theme: { ReactPrimary } }) => ReactPrimary};
    margin: .25rem;
    font-size: 2rem;
}

@media screen and (min-width: 800px) {
    display: none;
}
`

export const MobileMenu = styled('div') <{ menuOpen: boolean }>`
position: absolute;
visibility: ${({ menuOpen }) => menuOpen ? 'visible' : 'hidden'};
display: flex;
align-items: center;
justify-content: center;
bottom: 0;
height: ${({ menuOpen }) => menuOpen ? '6rem' : '0rem'};
width: 100%;
transition: all 1s ease-in-out;

ul {
    display: flex;
    justify-content: space-evenly;
    height: 100%;
    width: 100%;
    list-style: none;
}

li {
display: flex;
opacity: ${({ menuOpen }) => menuOpen ? 1 : 0};
align-items: center;
justify-content: center;
flex: 1;
text-align: center;
height: 100%;
font-size: 1.25rem;
transition: opacity 1s ease-in-out;
}

a, a:visited, a:active {
    text-decoration: none;
    color: white;
}
`