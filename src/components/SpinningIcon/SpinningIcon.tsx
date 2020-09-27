import React from 'react'
import {FaReact} from 'react-icons/fa'

import { StyledSpinningIcon } from './SpinningIcon.styles';
import { theme } from '../../Styles/Styled-Theme';

const HeroIcon = () => {
    return (
        <StyledSpinningIcon>
            <FaReact size={'35rem'} color={theme.ReactGrey} />
        </StyledSpinningIcon>
    )
}

export default HeroIcon
