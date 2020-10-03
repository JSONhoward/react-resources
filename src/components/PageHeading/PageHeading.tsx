import React from 'react'

import { StyledPageHeading } from './PageHeading.styles';

type Props = {
    heading: string
}

const PageHeading: React.FC<Props> = ({ heading }) => {
    return (
        <StyledPageHeading>
            <h1>{heading}</h1>
        </StyledPageHeading>
    )
}

export default PageHeading
