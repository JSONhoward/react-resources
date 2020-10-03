import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { StyledFooter, Copyright, GithubLink } from './Footer.styles';

const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>
                Copyright &copy; {new Date().getFullYear()}<Link to={'/'}><p>React Resources</p></Link>
            </Copyright>
            <GithubLink>
                <a href='https://github.com/JSONhoward/react-resources' target='_blank' rel='noopener noreferrer'>
                    <p>GitHub</p>
                </a>
                <FaExternalLinkAlt size={'10px'} />
            </GithubLink>
        </StyledFooter>
    )
}

export default Footer
