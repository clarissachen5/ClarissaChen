import { useEffect, useState } from "react";
import { Navbar, Container} from "react-bootstrap";
import logo from '../assets/logo.jpg';
import NavIcon1 from '../assets/nav-icon1.jpg';
import NavIcon2 from '../assets/nav-icon2.jpg';
import NavIcon3 from '../assets/nav-icon3.jpg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState['home'];
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
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <img scr={''} alt="Logo" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <span className="navbar-toggler-icon"></span>
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="addLinktoSocial"><img src={} alt=""/></a>
                        <a href="addLinktoSocial"><img src={} alt=""/></a>
                        <a href="addLinktoSocial"><img src={} alt=""/></a>
                   
                    </div>

                    <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>

  );
}

