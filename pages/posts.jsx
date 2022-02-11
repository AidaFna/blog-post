import Head from "next/head";
import allStore from "../store/actions";
import Link from "next/link";
import Navigation from "../components/header";
import Footer from "../components/footer";
import styles from "../styles/Posts.module.css";
import { Container, Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const listPosts = useSelector(({ listPosts }) => listPosts);

  useEffect(() => {
    // console.log(listPosts, "posts page");
    dispatch(allStore.fetchPosts());
  }, [listPosts]);
  return (
    <>
      <Head>
        <title>My Blog | Posts Page</title>
        <meta name="description" content="Posts Page" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navigation />

      <Container className={styles.main}>
        <h2 className="mb-5">My Posts</h2>
        {listPosts.map((el, idx) => (
          <Card className={styles.card} key={idx}>
            <Card.Body>
              <Card.Title>{(idx, el.title)}</Card.Title>
              <Card.Text className={styles.content}>{el.content}</Card.Text>
              <Link href={`/posts/${el.id}`} className={styles.see}>
                see more &rarr;
              </Link>
              <h6 className={styles.publish}>
                published at{" "}
                {el.published_at.slice(0, 10) +
                  " " +
                  el.published_at.slice(11, 16)}
              </h6>
            </Card.Body>
          </Card>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default Posts;
