import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TaskListing from './TaskListing';

function EditModal({showEditModal,setShowEditModal}) {

  const handleClose = () => {
    setShowEditModal(false)
    return;
  };
  const handleShow = () => {
    setShowEditModal(true)
    return;
  };

  return (
    <>
        <Modal show={showEditModal} onHide={()=>handleClose()}>
            <Modal.Header closeButton>
            <Modal.Title>Update Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Task Name</label>
                <input type="text" className="form-control" id="exampleInputEmail1"/>
            </div>
            <div className='mb-3 submit-btn'>
                {/* <button type="submit" className="btn btn-primary" onClick={()=>handleClose()}>Submit</button> */}
                <Button variant="primary" onClick={()=>handleClose()}>
                Update
                </Button>
            </div>
            </Modal.Body>
        </Modal>
    </>
  );
}

export default EditModal;