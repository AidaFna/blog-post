import styles from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Row className={styles.link}>
          <Col md={12} xs={12}>
            <a>
              Created by Aida Amrina in Kediri @2022 <br />
            </a>
          </Col>
          <Col></Col>
          <Col md={1} xs={1}>
            <a href="https://www.linkedin.com/in/aidafna/" target="_blank">
              <h3>
                <i class="bi bi-linkedin"></i>
              </h3>
            </a>
          </Col>
          <Col md={1} xs={1}>
            <h3>
              <a href="https://github.com/AidaFna/blog-post" target="_blank">
                <i class="bi bi-github"></i>
              </a>
            </h3>
          </Col>
          <Col></Col>
        </Row>
      </footer>
    </>
  );
};
export default Footer;
