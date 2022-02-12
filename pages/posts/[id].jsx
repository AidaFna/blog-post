import Head from "next/head";
import Navigation from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Details.module.css";
import allStore from "../../store/actions";
import { useRouter } from "next/router";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const details = useSelector(({ detailsPosts }) => detailsPosts);
  const published = useSelector(({ published }) => published);
  const created = useSelector(({ created }) => created);
  const updated = useSelector(({ updated }) => updated);

  useEffect(() => {
    // console.log(details, "details page");
    setLoading(true);
    dispatch(allStore.fetchDetails(id)).finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <Navigation />
        <h5 className={`${styles.loading}`}>
          <Spinner animation="border" variant="secondary" /> We are cooking your
          post ...
        </h5>
        <Footer></Footer>
      </>
    );
  }
  return (
    <>
      <Head>
        <title>My Blog | {details.title}</title>
        <meta name="description" content="My Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <Container className={styles.main}>
        <h3 className={styles.title}>{details.title}</h3>
        <p align="left" className={styles.muted}>
          published at{" "}
          {published.slice(0, 10) + " on " + published.slice(11, 16)}
        </p>
        <p align="justify" className={styles.content}>
          {details.content}
        </p>
        <p className={styles.muted}>
          <Row>
            <Col md={12} xs={12}>
              created at {created.slice(0, 10)}
            </Col>
            <Col md={12} xs={12}>
              updated at {updated.slice(0, 10)}
            </Col>
          </Row>
        </p>
      </Container>

      <Footer />
    </>
  );
};

export default Details;
