import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from './assets/img/White on Transparent.png';
import navIcon1 from './assets/img/nav-icon1.svg';
import gitlab from './assets/img/gitlab-logo-700.svg';



function PNav() {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onscroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

            window.addEventListener('scroll', onscroll);

            return () => window.removeEventListener('scroll', onscroll);
        }, []);

        const onUpdateActiveLink = (value) => {
            setActiveLink(value);
          }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" className="large-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link' } onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link' } onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link' } onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/brian-johnson-9384528/"><img src={navIcon1} alt="" /></a>
                <a href="https://gitlab.com/Wyatt002"><img src={gitlab} alt="" /></a>
            </div>
            <Nav.Link href="#connect">
              <button type="button" className="btn btn-outline-primary">Contact Me</button>
            </Nav.Link>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PNav;
