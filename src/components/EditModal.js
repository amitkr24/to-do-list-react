import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditModal({showEditModal,setShowEditModal,showitemTitle,showitemId}) {

  const handleClose = () => {
    setShowEditModal(false)
    return;
  };
  const handleShow = () => {
    setShowEditModal(true)
    return;
  };
  console.log('showitemTitl222e',showitemTitle);
  return (
    <>
        <Modal show={showEditModal} onHide={()=>handleClose()}>
            <Modal.Header closeButton>
            <Modal.Title>Update Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Task Name</label>
                <input type="hidden" className="form-control" name="id" defaultValue ={showitemId}/>
                <input type="text" className="form-control" name="title" defaultValue ={showitemTitle}/>
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