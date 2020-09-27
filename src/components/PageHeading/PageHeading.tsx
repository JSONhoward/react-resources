import React from 'react'

import { StyledPageHeading } from './PageHeading.styles';

type Props = {
    path: string
}

const PageHeading: React.FC<Props> = ({ path }) => {
    return (
        <StyledPageHeading>
            {
                path === '/channels' && <h1>Channels</h1>
            }
            {
                path === '/' && <h1>React Resources</h1>
            }
            {
                path === '/courses' && <h1>Courses</h1>
            }
            {
                path === '/blogs' && <h1>Blogs</h1>
            }
        </StyledPageHeading>
    )
}

export default PageHeading
