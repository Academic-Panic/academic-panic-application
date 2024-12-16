/* eslint-disable react/jsx-indent, @typescript-eslint/indent */

'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Lock, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar: React.FC = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <Navbar bg="light" expand="lg" style={{ fontFamily: 'AmollaRaspersItalic' }}>
      <Container>
        <Navbar.Brand href="/">ACADEMIC PANIC</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser
              ? [
                <div className="d-flex">
                  <NavDropdown title="COURSES" id="nav-dropdown">
                    <NavDropdown.Item
                      as={Nav.Link}
                      id="add-stuff-nav"
                      href="/addCourse"
                      key="addCourse"
                      active={pathName === '/addCourse'}
                    >
                      CREATE COURSE
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Nav.Link}
                      id="add-stuff-nav"
                      href="/listCourse"
                      key="listCourse"
                      active={pathName === '/listCourse'}
                    >
                      LIST COURSES
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="SESSIONS" id="nav-dropdown">
                    <NavDropdown.Item
                      as={Nav.Link}
                      id="add-stuff-nav"
                      href="/Agreement"
                      key="addSession"
                      active={pathName === '/Agreement'}
                    >
                      CREATE SESSION
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      as={Nav.Link}
                      id="add-stuff-nav"
                      href="/listSession"
                      key="listSession"
                      active={pathName === '/listSession'}
                    >
                      LIST SESSIONS
                    </NavDropdown.Item>
                  </NavDropdown>
                </div>,

                ]
              : ''}
            {currentUser && role === 'ADMIN' ? (
              <Nav.Link id="admin-stuff-nav" href="/admin" key="admin" active={pathName === '/admin'}>
                Admin
              </Nav.Link>
            ) : (
              ''
            )}
          </Nav>
          <Nav>
            {session ? (
              <NavDropdown id="login-dropdown" title={currentUser}>
                <NavDropdown.Item id="login-dropdown-sign-out" href="/api/auth/signout">
                  <BoxArrowRight />
                  Sign Out
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-change-password" href="/auth/change-password">
                  <Lock />
                  Change Password
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" href="/auth/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" href="/auth/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
