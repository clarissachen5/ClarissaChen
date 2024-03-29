import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from '../assets/logo.jpg';
import NavIcon1 from '../assets/nav-icon1.png';
import NavIcon2 from '../assets/nav-icon2.png';
import NavIcon3 from '../assets/nav-icon3.jpeg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
            
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                    {/* <img scr={logo} alt="Logo" /> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#experiences" className={activeLink === 'experiences' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('experiences')}>Experiences</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="http://www.linkedin.com/in/clarissachen5"><img src={NavIcon1} alt=""/></a>
                        <a href="https://github.com/clarissachen5"><img src={NavIcon2} alt=""/></a>
                        <a href="mailto:clchen5@bu.edu"><img src={NavIcon3} alt=""/></a>
                   
                    </div>

                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>

  );
}

