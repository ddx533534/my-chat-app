import React from 'react';
import { Navbar, Container, Nav } from "rsuite";
import { Link } from "react-router-dom";
import {
    AiOutlineHome,
    AiOutlineUser,
    AiFillStar,
} from "react-icons/ai";

const NavLink = React.forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
        {children}
    </Link>
));

export default function NavBar() {
    return (
        <div>
            <Navbar
                style={{}}
                className='navbar'>
                <Container>
                    <Nav>
                        <Nav.Item as={NavLink} href="/home" >
                            <AiOutlineHome style={{ marginBottom: '2px' }} />
                            Home
                        </Nav.Item>
                        <Nav.Item as={NavLink} href="/profile">
                            <AiOutlineUser style={{ marginBottom: '2px' }} />
                            Profile
                        </Nav.Item>
                        <AiFillStar style={{ fontSize: "1.1em" }} />
                    </Nav>
                </Container>
            </Navbar>
        </div >
    );
}
