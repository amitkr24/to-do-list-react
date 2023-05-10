import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,faCheck,faCheckSquare,faCheckCircle,faBuildingCircleXmark } from '@fortawesome/free-solid-svg-icons'
import SweetAlert from 'react-bootstrap-sweetalert';
import Example from './Example'
import EditModal from './EditModal';
import { useState } from 'react';

function TaskListing(props){
  const [showEditModal, setShowEditModal] = useState(false);
  let items = props.items;
  console.log(items)
  return (
    <>
      <section className="vh-100" style={{backgroundColor: '#eee'}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10">
              <div className="card">
                <div className="card-header p-3">
                  <h5 className="mb-0">
                  <i className="fas fa-tasks me-2"></i>
                  Task List</h5>
                </div>
                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{position: 'relative'}}>
                  <table className="table mb-0">
                    <thead>
                      <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Task</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                    {items.map((item) => (
                     <tr className="fw-normal" key={item.id}>
                      <td className="align-middle">
                      < span>{item.id}</span>
                      </td>
                      <td className="align-middle">
                        <span>{item.title}</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          {item.completed ? <span className="badge bg-success">completed</span>:<span className="badge bg-danger">Not Completed</span>}
                          
                        </h6>
                      </td>
                      <td className="align-middle">
                        <a href="#!" data-mdb-toggle="tooltip" title="Done"> <FontAwesomeIcon icon={item.completed ? faCheckCircle:faBuildingCircleXmark} /> </a>
                        <span data-mdb-toggle="tooltip" title="Edit" onClick={()=>setShowEditModal(true)}>
                          <FontAwesomeIcon icon={faEdit} /></span>
                        <a href="#!" data-mdb-toggle="tooltip" title="Remove"><FontAwesomeIcon icon={faTrash} /></a>
                      </td>
                    </tr>
                    ))}
                    </tbody>
                  </table>
                </div>
                <div className="card-footer text-end p-3">
                  <button className="me-2 btn btn-link">Cancel</button>
                  <SweetAlert
                    warning
                    showCancel
                    confirmBtnText="Yes"
                    cancelBtnText="No"
                    confirmBtnBsStyle="primary"
                    cancelBtnBsStyle="light"
                  >
                    <strong>Are you sure want to complete this task ?</strong>
                  </SweetAlert>
                  <Example/>
                </div>
              </div>
             <EditModal showEditModal={showEditModal} setShowEditModal={setShowEditModal}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


export default TaskListing;
