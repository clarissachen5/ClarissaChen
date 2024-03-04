import { Navbar, Container} from "react-bootstrap";
export const NavBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <img scr={''} alt="Logo" />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <span className="navbar-toggler-icon"></span>
                
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
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

