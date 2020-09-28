import styled from 'styled-components';

export const StyledVideoPlayer = styled('div')<{state: string}>`
position: fixed;
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
background: rgba(0,0,0,.75);
opacity: ${({state}) => {
    switch(state) {
        case 'entering':
            return 1
        case 'entered':
            return 1
        case 'exiting':
            return 0
        case 'exited':
            return 0
        default:
            return 1
    }
}};
transition: opacity 3s ease-in-out;
z-index: 2;
overflow: hidden;
`