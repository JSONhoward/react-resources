import styled from 'styled-components';

export const StyledSections = styled('div')`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: .5rem;
justify-items: center;
padding: .5rem;
`

export  const SectionTitle = styled('p')`
text-align: center;
color: #6F6F6F;
font-size: 1.5rem;
`

export const Img = styled('img')<{left: number}>`
position: absolute;
left: ${({left}) => left + '%'};
border-radius: 50%;
height: 7.5rem;
width: 7.5rem;
box-shadow: 2px 2px 5px rgba(0,0,0,.5);
transition: all 500ms ease-in-out;

&:hover {
    z-index: 1;
    height: 8rem;
    width: 8rem;
}
`

export const SectionDescription1 = styled('div')`
position: relative;
display: flex;
align-items: center;
height: 50%;
width: 100%;
`

export const SectionDescription2 = styled('div')`

`

export const SectionDescription3 = styled('div')`

`

export const Section = styled('div')`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
height: 425px;
width: 100%;
`