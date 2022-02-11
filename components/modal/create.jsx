import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import allStore from "../../store/actions";
import { useRouter } from "next/router";

const ModalCreate = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  // const createPost = useSelector(({ createPost }) => createPost);

  // useEffect(() => {
  //   console.log(createPost, "details page");
  //   dispatch(allStore.fetchDetails(id));
  // }, [dispatch, id]);

  const handleCreatePost = () => {
    // dispatch(allStore.fetchCreate(title, content)).then().catch().finally();
  };

  return (
    <>
      <Modal
        show={props.show}
        onHide={show}
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
          <Button
            onClick={() => {
              // handleCreatePost();
              setShow(false);
            }}
          >
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalCreate;
