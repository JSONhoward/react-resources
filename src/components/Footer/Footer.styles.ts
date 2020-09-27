import styled from 'styled-components';

export const StyledFooter = styled('footer')`
display: flex;
align-items: center;
justify-content: center;
height: 4rem;
width: 100%;
background: ${({theme: {ReactDark}}) => ReactDark};
`

export const Copyright = styled('div')`
display: flex;
align-items: center;
height: 100%;
width: 280px;
color: white;

p  {
color: ${({theme: {ReactPrimary}}) => ReactPrimary};
margin: 0 2px;
}

a, a:visited, a:hover {
    text-decoration: none;
}
`