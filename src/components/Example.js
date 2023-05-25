import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example(props) {
  const [show, setShow] = useState(false);
 
  const handleClose = () => {
    setShow(false)
    return;
  };
  const handleClose2 = () => {
    props.handleAddItems();
    setShow(false)
    return;
  };
  const handleShow = () => {
    setShow(true)
    return;
  };

  return (
    <>
      <Button variant="primary" onClick={()=>handleShow()}>
        Add Task
      </Button>
      <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Task Name</label>
            <input type="text" className="form-control" id="exampleInputEmail1" onChange={props.handleChange}/>
          </div>
          <div className='mb-3 submit'>
            {/* <button type="submit" className="btn btn-primary" onClick={()=>handleClose()}>Submit</button> */}
            <Button variant="primary" onClick={handleClose2}>
              Submit
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Example;