import React from 'react'
import { StyledHero } from './Hero.styles';
import SpinningIcon from '../SpinningIcon/index';

const Hero: React.FC = ({children}) => {

    return (
        <StyledHero>
            <SpinningIcon />
            {children}
        </StyledHero>
    )
}

export default Hero
