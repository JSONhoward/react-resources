import React from 'react'
import { Link } from 'react-router-dom';
import { StyledFooter, Copyright } from './Footer.styles';

const Footer = () => {
    return (
        <StyledFooter>
            <Copyright>
            Copyright &copy; {new Date().getFullYear()}<Link to={'/'}><p>React Resources</p></Link>
            </Copyright>
        </StyledFooter>
    )
}

export default Footer
