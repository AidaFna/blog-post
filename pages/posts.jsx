import Head from "next/head";
import allStore from "../store/actions";
import Link from "next/link";
import Navigation from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Posts.module.css";
import { Container, Card, Row, Col, Spinner, Form } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const listPosts = useSelector(({ listPosts }) => listPosts);

  useEffect(() => {
    setLoading(true);
    // console.log(listPosts, "posts page");
    dispatch(allStore.fetchPosts()).finally(() => setLoading(false));
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <Navigation />
        <h5 className={`${styles.loading}`}>
          <Spinner animation="border" variant="secondary" /> Please wait ...
        </h5>
        <Footer></Footer>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>My Blog | Posts Page</title>
        <meta name="description" content="Posts Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <Container className={styles.main}>
        <h2 className="mb-5">- MY POSTS -</h2>
        <div className={styles.search}>
          <Form.Control
            type="text"
            placeholder="search keyword"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {listPosts.filter((listPosts) => listPosts.title.includes(search))
          .length > 0 ? (
          listPosts
            .filter((listPosts) => listPosts.title.includes(search))
            .map((el, idx) => (
              <Card className={styles.card} key={idx}>
                <Card.Body>
                  <Card.Title>{(idx, el.title)}</Card.Title>
                  <Card.Text className={styles.content}>{el.content}</Card.Text>
                  <Link href={`/posts/${el.id}`} className={styles.see}>
                    see more &rarr;
                  </Link>
                  <p className={styles.publish}>
                    published at{" "}
                    {el.published_at.slice(0, 10) +
                      " " +
                      el.published_at.slice(11, 16)}
                  </p>
                </Card.Body>
              </Card>
            ))
        ) : (
          <>
            <p> Post(s) not found</p>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Posts;
