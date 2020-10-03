import React from 'react'

import { StyledDevIcons } from './DevIcons.styles'
import Icon from './Icon'
import { webDevChannels } from '../../utils/constants';

const DevIcons = () => {
    const icons = webDevChannels.map((el, i) => {
        return (
            <Icon key={i} icon={el.icon} title={el.name} />
        )
    })

    return (
        <StyledDevIcons>
            {icons}
        </StyledDevIcons>
    )
}

export default DevIcons
