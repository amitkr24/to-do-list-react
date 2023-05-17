import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditModal({showEditModal,setShowEditModal,showitemTitle,setshowitemTitle,showitemId,handleUpdateItem}) {

  const handleClose = () => {
    setShowEditModal(false)
    return;
  };
  const handleCloseAndUpdate = () => {
    handleUpdateItem();
    setShowEditModal(false)
    return;
  };
  const handleShow = () => {
    setShowEditModal(true)
    return;
  };
  const handleChange = (event) => {
    setshowitemTitle(event.target.value);
}
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
                <input type="text" className="form-control" name="title" defaultValue ={showitemTitle} onChange={handleChange}/>
            </div>
            <div className='mb-3 submit-btn'>
                {/* <button type="submit" className="btn btn-primary" onClick={()=>handleClose()}>Submit</button> */}
                <Button variant="primary" onClick={()=>handleCloseAndUpdate()}>
                Update
                </Button>
            </div>
            </Modal.Body>
        </Modal>
    </>
  );
}

export default EditModal;