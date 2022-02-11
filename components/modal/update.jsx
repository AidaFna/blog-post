import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";

const ModalUpdate = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const details = useSelector(({ detailsPosts }) => detailsPosts);

  useEffect(() => {
    console.log(details, "details page");
    dispatch(allStore.fetchDetails(props.id));
  }, [dispatch, props.id]);

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
                <Form.Label>Title Post</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="title post"
                  value={details.title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Title must be less than 50 characters.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="content">
                <Form.Label>Content Post</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={8}
                  value={details.content}
                  type="text"
                  placeholder="content post"
                  onChange={(e) => setContent(e.target.value)}
                />
                <Form.Text className="text-muted">
                  Content must be less than 1000 characters.
                </Form.Text>
              </Form.Group>
            </Form>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdate;
