import styled from 'styled-components';

export const StyledChannels = styled('div')`
display: flex;
flex-direction: row;
align-items: center;
height: 250px;
width: 90%;
box-shadow: 1px 1px 15px rgba(0,0,0,.25);
border-radius: 5px;
margin: 2rem;

@media screen and (max-width: 800px) {
    height: 200px;
}

@media screen and (max-width: 600px) {
    height: 100px;
}
`

export const ChannelsLoading = styled('div')`
display: flex;
flex-direction: row;
align-items: center;
height: 250px;
width: 90%;
background: ${({theme: {ReactSecondary}}) => ReactSecondary};
box-shadow: 1px 1px 15px rgba(0,0,0,.25);
border-radius: 5px;
margin: 2rem;
`

export const ChannelIcon = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
height: 100%;
width: 250px;
overflow: hidden;
margin: 0 0rem;

img {
height: 75%;
width: 75%;
object-fit: cover;
border-radius: 50%;
box-shadow: 1px 1px 5px rgba(0,0,0,.25);
cursor: pointer;
}

@media screen and (max-width: 800px) {
    width: 200px;
}

@media screen and (max-width: 600px) {
    width: 100px;
}
`

export const ChannelName = styled('p')`
text-align: center;

@media screen and (max-width: 600px) {
    display: none;
}
`

export const ChannelVideos = styled('div')`
position: relative;
display: flex;
align-items: center;
justify-content: space-evenly;
height: 100%;
width: 100%;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
background: ${({theme: {ReactSecondary}}) => ReactSecondary};
padding: .5rem;

a, a:active, a:visited {
    text-decoration: none;
    color: ${({theme: {ReactDark}}) => ReactDark};
}

a:hover {
color: ${({theme: {ReactPrimary}}) => ReactPrimary};
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

export const VideoImage = styled('div')`
position: relative;
height: 100%;
width: 33%;
margin: .5rem;

img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}
`

export const More = styled('div')`
position: absolute;
top: 50%;
right: 0;
display: grid;
place-items: center;
height: 50%;
width: 4.5rem;
transform: translateY(-50%);
border-top-left-radius: 50px;
border-bottom-left-radius: 50px;
background: white;
cursor: pointer;
overflow: hidden;
transition: width 1s ease-in-out, color 1s ease-in-out;

p {
    text-align: center;
    width: 10rem;
}

&:hover {
width: 9rem;
}
`