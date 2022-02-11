import Link from "next/link";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./Header.module.css";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Link href="/" className={styles.brand}>
            <Navbar.Brand className={styles.brand}>
              <img src="../favicon.png" height="25px"></img> My Blog
            </Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
            <Link href="/posts">
              <Nav.Link href="/posts">Posts</Nav.Link>
            </Link>
            <Link href="/manage">
              <Nav.Link href="/manage">Manage</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
