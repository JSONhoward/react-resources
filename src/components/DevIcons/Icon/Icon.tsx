import React from 'react'
import { StyledIcon } from './Icon.styles';

type Props = {
    icon: string,
    title: string,

}

const Icon: React.FC<Props> = ({icon, title}) => {
    return (
        <StyledIcon>
            <img data-testid={`devIcon${title}`} src={icon} alt={title} />
        </StyledIcon>
    )
}

export default Icon
