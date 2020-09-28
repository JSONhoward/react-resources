import styled from 'styled-components';

export const StyledPageHeading = styled('div')`
display: flex;
z-index: 1;

h1 {
    color: ${({theme: {ReactPrimary}}) => ReactPrimary};
    font-size: 4rem;
}

@media screen and (max-width: 600px) {
    h1 {
        font-size: 2rem;
    }
}
`