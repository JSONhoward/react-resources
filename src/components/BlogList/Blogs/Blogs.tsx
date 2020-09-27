import React from 'react'
import { StyledBlogs, BlogIcon, BlogTitle, BlogLink } from './Blogs.styles';
import { FaExternalLinkAlt } from 'react-icons/fa';

type Props = {
    icon: string,
    title: string,
    url: string
}

const Blogs: React.FC<Props> = ({ icon, title, url }) => {
    return (
        <StyledBlogs>
            <BlogIcon src={icon} />
            <BlogTitle>{title}</BlogTitle>
            <BlogLink onClick={() => window.open(url, '_blank')}><FaExternalLinkAlt size={'2rem'} /></BlogLink>
        </StyledBlogs>
    )
}

export default Blogs
