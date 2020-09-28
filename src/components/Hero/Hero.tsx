import React from 'react'
import { StyledHero, Subtitle } from './Hero.styles';
import SpinningIcon from '../SpinningIcon/index';

const Hero: React.FC = ({children}) => {

    return (
        <StyledHero>
            <SpinningIcon />
            {children}
            <Subtitle>Various resources for learning React.js</Subtitle>
        </StyledHero>
    )
}

export default Hero
