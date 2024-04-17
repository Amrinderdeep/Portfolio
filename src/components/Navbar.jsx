import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react';
import logo from '../assets/img/Bhatt3.png';

import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon5.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import '../App.css'


export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = ()=>{
            if(window.scrollY > 50){
                setScrolled(true)
            }
            else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (linkName) =>{
        setActiveLink(linkName)
    }

    return (
        <Navbar expand="md" className={scrolled? 'scrolled' : ''}>
        <Container>
            <Navbar.Brand href="#home">
                <img className='bhatt-logo' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>            
            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href="https://www.linkedin.com/in/amrinderdeep-singh-bhatt"><img src={navIcon1} alt="" /></a>
                    <a href="https://github.com/Amrinderdeep"><img src={navIcon2} alt="" /></a>
                    <a href="https://www.instagram.com/adbhatt22/"><img src={navIcon3} alt="" /></a>
                </div>
                <button className='vvd' onClick={()=>{console.log("Form")}}><a className='simple-anchor' href='#contact'> <span>Let's Connect</span> </a></button>
            </span>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}