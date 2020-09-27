import React from 'react'

import { onlineBlogs } from '../../utils/constants';
import { StyledBlogList } from './BlogList.styles';
import Blogs from './Blogs';


const BlogList = () => {
    const blogs = onlineBlogs.map((el, i) => {
        return (
            <Blogs icon={el.icon} title={el.name} url={el.url}/>
        )
    })

    return (
        <StyledBlogList>
            {blogs}
        </StyledBlogList>
    )
}

export default BlogList
