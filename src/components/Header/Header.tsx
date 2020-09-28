import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import { StyledHeader, Logo, Nav, Li, GithubLink, MobileMenuButton, MobileMenu } from './Header.styles'
import { FaBars, FaExternalLinkAlt, FaReact, FaTimes } from 'react-icons/fa';


const Header = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const url: string = useLocation().pathname

    return (
        <StyledHeader menuOpen={menuOpen}>
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
            <MobileMenuButton onClick={() => setMenuOpen(prev => !prev)}>
                {
                    menuOpen ? <FaTimes /> : <FaBars />
                }
            </MobileMenuButton>
            <MobileMenu menuOpen={menuOpen}>
                <ul>
                    <li onClick={() => setMenuOpen(false)}><Link to='/'>Home</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to={'/channels'}>Channels</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to={'/courses'}>Courses</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to={'/blogs'}>Blogs</Link></li>
                </ul>
            </MobileMenu>
            <GithubLink>
                <p onClick={() => window.open('https://github.com/JSONhoward/react-resources', '_blank')}>GitHub</p>
                <FaExternalLinkAlt size={'10px'} />
            </GithubLink>
        </StyledHeader>
    )
}

export default Header
