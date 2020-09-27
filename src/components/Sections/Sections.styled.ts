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

export const Img = styled('img')<{state: string, circle: boolean}>`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
border-radius: ${({circle}) => circle ? '50%' : 'none'};
height: 10rem;
width: 10rem;
box-shadow: 2px 2px 5px rgba(0,0,0,.5);
transition: all 1s ease-in-out;
opacity: ${({state}) => {
    const obj: {[key: string]: number} = {
        'entering': 1,
        'entered': 1,
        'exiting': 0,
        'exited': 0
    }
    return obj[state]
}};

&:hover {
    height: 12rem;
    width: 12rem;
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
position: relative;
display: flex;
align-items: center;
height: 50%;
width: 100%;
`

export const SectionDescription3 = styled('div')`
position: relative;
display: flex;
align-items: center;
height: 50%;
width: 100%;
`

export const Section = styled('div')`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 300px;
width: 100%;
`