import styles from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <a>Created by Aida Amrina in Kediri @2022</a>
        <Row className={styles.link}>
          <Col md={6} xs={6}>
            <a href="https://www.linkedin.com/in/aidafna/" target="_blank">
              <i class="bi bi-linkedin"></i>
            </a>
          </Col>
          <Col md={6} xs={6}>
            <a href="https://github.com/AidaFna/blog-post" target="_blank">
              <i class="bi bi-github"></i>
            </a>
          </Col>
        </Row>
      </footer>
    </>
  );
};
export default Footer;
