import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import allStore from "../../store/actions";

const ModalUpdate = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const listPosts = useSelector(({ listPosts }) => listPosts);
  const details = useSelector(({ detailsPosts }) => detailsPosts);
  const titles = useSelector(({ titlePosts }) => titlePosts);
  const contents = useSelector(({ contentPosts }) => contentPosts);
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
      newErrors.title = "title cannot be more than 50 characters!";
    // content errors
    if (!content || content.trim() === "")
      newErrors.content = "cannot be blank!";
    else if (content.length > 1000)
      newErrors.content = "title cannot be more than 1000 characters!";
    return newErrors;
  };

  useEffect(() => {
    console.log(props.id, "update modal");
    dispatch(allStore.fetchDetails(683));
    // setTitle(props.title);
    // setContent(props.contents);
  }, [props.id]);

  const handleUpdatePost = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      dispatch(allStore.fetchUpdate(title, content, details.id));
      props.onHide(event);
    }
  };

  return (
    <>
      <Modal
        {...props}
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
                <Form.Label>Title Post {props.idx}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title post"
                  value={details.title}
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
          <Button onClick={(e) => handleUpdatePost(e)}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdate;
