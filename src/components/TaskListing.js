import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,faCheck } from '@fortawesome/free-solid-svg-icons'
import Example from './Example'
import EditModal from './EditModal';
import { useState } from 'react';

function TaskListing(item){
  const [showEditModal, setShowEditModal] = useState(false);
  console.log('fetchData',item);
  
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
                        <th scope="col">Team Member</th>
                        <th scope="col">Task</th>
                        <th scope="col">Priority</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="fw-normal">
                        <th>
                          <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
                            className="shadow-1-strong rounded-circle" alt="avatar 1"
                            style={{width: '55px', height: 'auto'}}/>
                          <span className="ms-2">Alice Mayer</span>
                        </th>
                        <td className="align-middle">
                          <span>Call Sam For payments</span>
                        </td>
                        <td className="align-middle">
                          <h6 className="mb-0"><span className="badge bg-danger">High priority</span></h6>
                        </td>
                        <td className="align-middle">
                          <a href="#!" data-mdb-toggle="tooltip" title="Done"> <FontAwesomeIcon icon={faCheck} /> </a>
                          <span data-mdb-toggle="tooltip" title="Edit" onClick={()=>setShowEditModal(true)}>
                            <FontAwesomeIcon icon={faEdit} /></span>
                          <a href="#!" data-mdb-toggle="tooltip" title="Remove"><FontAwesomeIcon icon={faTrash} /></a>
                        </td>
                      </tr>

                    </tbody>
                  </table>
                </div>
                <div className="card-footer text-end p-3">
                  <button className="me-2 btn btn-link">Cancel</button>
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
