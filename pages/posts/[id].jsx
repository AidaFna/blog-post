import Head from "next/head";
import Navigation from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Details.module.css";
import allStore from "../../store/actions";
import { useRouter } from "next/router";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const details = useSelector(({ detailsPosts }) => detailsPosts);

  useEffect(() => {
    console.log(details, "details page");
    dispatch(allStore.fetchDetails(id));
  }, [dispatch, id]);

  return (
    <>
      <Head>
        <title>My Blog | {details.title}</title>
        <meta name="description" content="My Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <Container className={styles.main}>
        <h3>{details.title}</h3>
        <p align="left">
          published at{" "}
          {/* {details.published_at.slice(0, 10) +
            " " +
            details.published_at.slice(11, 16)} */}
        </p>
        <p align="justify" className={styles.content}>
          {details.content}
        </p>
        <Row>
          {/* <Col md={6} xs={12}>
            created at{" "}
            {details.created_at.slice(0, 10) +
              " " +
              details.created_at.slice(11, 16)}
          </Col>
          <Col md={6} xs={12}>
            updated at{" "}
            {details.updated_at.slice(0, 10) +
              " " +
              details.updated_at.slice(11, 16)}
          </Col> */}
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Details;
