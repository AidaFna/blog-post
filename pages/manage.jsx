import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../components/header";
import Footer from "../components/footer";
import ModalCreate from "../components/modal/create";
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
  Modal,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Manage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const listPosts = useSelector(({ listPosts }) => listPosts);
  const [search, setSearch] = useState("");
  const [id, setId] = useState("");
  const [idx, setIdx] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [modalCreate, setModalCreate] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalPreview, setModalPreview] = useState(false);
  const [errors, setErrors] = useState({});

  const updateErr = (value) => {
    console.log(!!errors.value, value);
    setErrors({
      ...errors,
      [value]: null,
    });
  };

  const findFormErrors = () => {
    const newErrors = {};
    // title errors
    if (!title || title.trim() === "") newErrors.title = "cannot be blank!";
    else if (title.length > 50)
      newErrors.name = "title cannot be more than 50 characters!";
    // content errors
    if (!content || content.trim() === "")
      newErrors.content = "cannot be blank!";
    else if (content.length > 5000)
      newErrors.content = "title cannot be more than 5000 characters!";
    return newErrors;
  };

  useEffect(() => {
    // console.log(listPosts);
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
      }
    });
  };

  const handleUpdatePost = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      dispatch(allStore.fetchUpdate(title, content, idx));
      handleClose();
    }
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
      {/* <ModalUpdate
        show={modalUpdate}
        onHide={() => setModalUpdate(false)}
        id={id}
        idx={idx}
        title={title}
        content={content}
      /> */}
      <ModalPreview
        show={modalPreview}
        onHide={() => setModalPreview(false)}
        id={id}
      />
      <Container className={styles.main}>
        <div className={styles.group}>
          <Row>
            <Col md={4} xs={6}>
              <Button onClick={() => setModalCreate(true)}>
                <i class="bi bi-plus-circle"></i> Create Post
              </Button>
            </Col>
            <Col></Col>
            <Col md={3} xs={5}>
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
            .length > 0 ? (
            listPosts
              .filter((listPosts) => listPosts.title.includes(search))
              .map((el, idx) => (
                <ListGroup.Item
                  key={idx}
                  className="d-flex justify-content-between align-items-start"
                >
                  <Row>
                    <Col md={10} xs={12}>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">
                          <h4>{el.title}</h4>
                        </div>
                        <p align="justify" className={styles.content}>
                          {el.content}
                        </p>
                        <p className={styles.muted}>
                          <Row>
                            <Col md={4} xs={12}>
                              created at{" "}
                              {el.created_at.slice(0, 10) +
                                " " +
                                el.created_at.slice(11, 16)}
                            </Col>
                            <Col md={4} xs={12}>
                              published at{" "}
                              {el.published_at.slice(0, 10) +
                                " " +
                                el.published_at.slice(11, 16)}
                            </Col>
                            <Col md={4} xs={12}>
                              updated at{" "}
                              {el.updated_at.slice(0, 10) +
                                " " +
                                el.updated_at.slice(11, 16)}
                            </Col>
                          </Row>
                        </p>
                      </div>
                    </Col>
                    <Col md={1} xs={12}>
                      <h5>
                        <Badge
                          bg="success"
                          className={styles.badge}
                          pill
                          onClick={() => {
                            setId(el.id);
                            setModalPreview(true);
                          }}
                        >
                          <i class="bi bi-binoculars"></i> preview
                        </Badge>

                        <Badge
                          variant="primary"
                          className={`${styles.badge} mt-3 mb-3`}
                          pill
                          onClick={() => {
                            handleShow();
                            setIdx(el.id);
                            setTitle(el.title);
                            setContent(el.content);
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
                      </h5>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
          ) : (
            <>
              <ListGroup.Item
                className={` d-flex justify-content-between align-items-start`}
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold"></div>
                  Post(s) not found.
                </div>
              </ListGroup.Item>
            </>
          )}
        </ListGroup>
      </Container>
      {/* modal update */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <Form>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title Post </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title post"
                  value={title}
                  autoComplete="off"
                  autoCapitalize="on"
                  autoFocus="on"
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                    updateErr("title");
                  }}
                  isInvalid={!!errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Title must be less than 50 characters.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content Post</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  type="text"
                  placeholder="content post"
                  value={content}
                  autoComplete="off"
                  autoCapitalize="on"
                  autoFocus="on"
                  required
                  onChange={(e) => {
                    setContent(e.target.value);
                    updateErr("content");
                  }}
                  isInvalid={!!errors.content}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.content}
                </Form.Control.Feedback>
                <Form.Text className="text-muted">
                  Content must be less than 1000 characters.
                </Form.Text>
              </Form.Group>
            </Form>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(e) => {
              handleUpdatePost(e);
            }}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
      {/* end modal update */}

      <Footer />
    </>
  );
};

export default Manage;
