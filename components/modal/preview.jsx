import { Modal } from "react-bootstrap";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../styles/Manage.module.css";
import allStore from "../../store/actions";

const ModalPreview = (props) => {
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
            Preview Post
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2 className={styles.prevTitle}>{details.title}</h2>
          <p align="justify" className={styles.preview}>
            {details.content}
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default ModalPreview;
