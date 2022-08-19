import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} size="sm">
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit {props.edit}:</Modal.Title>
        </Modal.Header>
        <Form>
            <Modal.Body>
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Edit..." />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="dark" onClick={handleClose} type="submit">
                Save Changes
            </Button>
            </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}
