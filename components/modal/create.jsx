import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";

const ModalCreate = (props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const [title, setTitle] = useState("");
  // const [content, setContent] = useState("");
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const { title, content } = form;

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    // Check and see if errors exist, and remove them from the error object:
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
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
    else if (content.length > 1000)
      newErrors.content = "title cannot be more than 1000 characters!";
    return newErrors;
  };

  const handleCreatePost = (event) => {
    event.preventDefault();
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      dispatch(allStore.fetchCreate(title, content)).then().catch().finally();
      props.onHide(event);
    }
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={props.onHide}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <Form>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title Post</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title post"
                  autoComplete="off"
                  autoCapitalize="on"
                  autoFocus="on"
                  required
                  onChange={(e) => setField("title", e.target.value)}
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
                  autoComplete="off"
                  autoCapitalize="on"
                  autoFocus="on"
                  required
                  onChange={(e) => setField("content", e.target.value)}
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
          <Button onClick={(e) => handleCreatePost(e)}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCreate;
