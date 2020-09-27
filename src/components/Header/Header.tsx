import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import { StyledHeader, Logo, Nav, Li, GithubLink } from './Header.styles'
import { FaExternalLinkAlt, FaReact } from 'react-icons/fa';


const Header = () => {
    const url: string = useLocation().pathname

    return (
        <StyledHeader>
            <Logo>
                <FaReact size={'1.5rem'} />
                <Link to={'/'}>
                    <p>React Resources</p>
                </Link>
            </Logo>
            <Nav>
                <ul>
                    <Li active={url === '/'}><Link to={'/'}>Home</Link></Li>
                    <Li active={url.includes('channel')}><Link to={'/channels'}>Channels</Link></Li>
                    <Li active={url === '/courses'}><Link to={'/courses'}>Courses</Link></Li>
                    <Li active={url === '/blogs'}><Link to={'/blogs'}>Blogs</Link></Li>
                </ul>
            </Nav>
            <GithubLink>
                <p onClick={() => window.open('http://www.github.com/JSONhoward', '_blank')}>GitHub</p> 
                <FaExternalLinkAlt size={'10px'} />
            </GithubLink>
        </StyledHeader>
    )
}

export default Header
