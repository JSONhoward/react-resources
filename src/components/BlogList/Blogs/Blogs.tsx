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
            <BlogIcon data-testid='blogIcon' src={icon} />
            <BlogTitle>{title}</BlogTitle>
            <BlogLink data-testid='blogLink' href={url} target='_blank' rel='noreferrer noopener'><FaExternalLinkAlt size={'2rem'} /></BlogLink>
        </StyledBlogs>
    )
}

export default Blogs
