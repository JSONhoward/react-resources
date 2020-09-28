import styled from "styled-components";

export const StyledVideoGrid = styled('div')`
width: 100%;
padding: 1rem;
`

export const Videos = styled('div')`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
justify-items: center;
gap: 2rem;
`

export const SingleVideo = styled('div')`
position: relative;
display: flex;
align-items: center;
justify-content: center;
height: fit-content;
overflow: hidden;
box-shadow: 1px 1px 5px rgba(0,0,0,.5);

img {
    height: auto;
    width: 100%;
    object-fit: cover;
}
`

export const VideoImagePlay = styled('div')`
position: absolute;
height: 100%;
width: 100%;
backdrop-filter: blur(2px);
overflow: hidden;
opacity: 0;
transition: all .5s ease-in-out;
cursor: pointer;

&:hover {
    opacity: 1;
}

svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

span {
    position: absolute;
    top: .5rem;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    text-shadow: 1px 1px 5px black;
}
`