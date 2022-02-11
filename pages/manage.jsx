import Head from "next/head";
import Navigation from "../components/header";
import Footer from "../components/footer";
import ModalCreate from "../components/modal/create";
import ModalUpdate from "../components/modal/update";
import ModalPreview from "../components/modal/preview";
import styles from "../styles/Manage.module.css";
import swal from "sweetalert";
import allStore from "../store/actions";
import {
  Container,
  ListGroup,
  Badge,
  Button,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Manage = () => {
  const dispatch = useDispatch();
  const listPosts = useSelector(({ listPosts }) => listPosts);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const [modalCreate, setModalCreate] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalPreview, setModalPreview] = useState(false);

  useEffect(() => {
    // console.log(listPosts, "manage page");
    dispatch(allStore.fetchPosts());
  }, [dispatch, listPosts]);

  const handleDeletePost = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover the post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(allStore.fetchDelete(id));
        swal("The post has been deleted!", {
          icon: "success",
        });
      } else {
        swal("The post is safe!");
      }
    });
  };
  return (
    <>
      <Head>
        <title>My Blog | Management Posts</title>
        <meta name="description" content="My Blog" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <ModalCreate show={modalCreate} onHide={() => setModalCreate(false)} />
      <ModalUpdate
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
        id={id}
      />
      <ModalPreview
        show={modalPreview}
        onHide={() => setModalPreview(false)}
        id={id}
      />
      <Container className={styles.main}>
        <div className={styles.group}>
          <Row>
            <Col md={6} xs={6}>
              <Button onClick={() => setModalCreate(true)}>
                <i class="bi bi-plus-circle"></i> Create Post
              </Button>
            </Col>
            <Col md={6} xs={6}>
              <Form.Control
                type="text"
                placeholder="search keyword"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Col>
          </Row>
        </div>
        <ListGroup as="ol" numbered className={styles.listgroup}>
          <ListGroup.Item
            className={`${styles.title} d-flex justify-content-between align-items-start`}
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">YOUR POSTS</div>
            </div>
          </ListGroup.Item>

          {listPosts.filter((listPosts) => listPosts.title.includes(search))
            ? listPosts
                .filter((listPosts) => listPosts.title.includes(search))
                .map((el, idx) => (
                  <ListGroup.Item
                    key={idx}
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">
                        <h4>{el.title}</h4>
                      </div>
                      <p align="justify" className={styles.content}>
                        {el.content}
                      </p>
                    </div>
                    <Badge
                      bg="success"
                      className={styles.badge}
                      pill
                      onClick={() => {
                        setModalPreview(true);
                        setId(el.id);
                      }}
                    >
                      <i class="bi bi-binoculars"></i> preview
                    </Badge>
                    <Badge
                      variant="primary"
                      className={styles.badge}
                      pill
                      onClick={() => {
                        setModalUpdate(true);
                        setId(el.id);
                      }}
                    >
                      <i class="bi bi-pencil-square"></i> edit
                    </Badge>
                    <Badge
                      bg="danger"
                      className={styles.badge}
                      pill
                      onClick={(e) => handleDeletePost(el.id)}
                    >
                      <i class="bi bi-trash3"></i> delete
                    </Badge>
                  </ListGroup.Item>
                ))
            : "not found"
              // <h3>not found</h3>
          }
        </ListGroup>
      </Container>

      <Footer />
    </>
  );
};

export default Manage;
