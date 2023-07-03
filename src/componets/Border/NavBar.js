import { Navbar, Container, Nav } from "rsuite";
import { Link } from "react-router-dom";

export function NavBar() {
    return (
        <div>
            <Navbar
                fixed="top">
                <Container>
                    <Navbar.Brand href="/" className="d-flex">
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav">
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto" defaultActiveKey="#home">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/"> Home</Nav.Link>
                            </Nav.Item>

                            <Nav.Item>
                                <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );

}
