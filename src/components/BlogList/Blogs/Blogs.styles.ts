import styled from 'styled-components';

export const StyledBlogs = styled('div')`
position: relative;
display: flex;
align-items: center;
justify-content: center;
height: 200px;
box-shadow: 1px 1px 15px rgba(0,0,0,.25);
border-radius: 5px;
margin: 2rem;

&:hover {
    box-shadow: ${({ theme: { ReactPrimary } }) => `1px 1px 15px ${ReactPrimary}`};
}
`

export const BlogIcon = styled('img')`
position: absolute;
top:0;
left: 0;
height: 25%;
width: 25%;
border-bottom-right-radius: 50%;
box-shadow: 1px 1px 5px rgba(0,0,0,.25);
`

export const BlogTitle = styled('p')`
text-align: center;
font-size: 1.5rem;
color: ${({ theme: { ReactDark } }) => ReactDark};
text-shadow: 1px 1px 5px rgba(0,0,0,.25);
`

export const BlogLink = styled('a')`
position: absolute;
bottom: 0;
right: 0;
display: grid;
place-items: center;
height: 25%;
width: 25%;
border-top-left-radius: 50%;
box-shadow: 1px 1px 5px rgba(0,0,0,.25);
cursor: pointer;

svg {
    color: ${({ theme: { ReactPrimary } }) => ReactPrimary};
}
`