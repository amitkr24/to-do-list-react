import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,faCheck,faCheckSquare,faCheckCircle,faBuildingCircleXmark,faSpinner } from '@fortawesome/free-solid-svg-icons'
import Example from './Example'
import EditModal from './EditModal';
import { useState } from 'react';
import Swal from 'sweetalert2';

function TaskListing(props){
  const [showEditModal, setShowEditModal] = useState(false);
  let items = props.items;
  // show confirmation popup before save changes
  const handleClick = (itemId) => { 
    Swal.fire({
      icon: 'warning',
      title: 'Do you want to save the changes?',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        props.toggleCompleted(itemId);
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  
    // show confirmation popup before save changes
    const deleteTask = (itemId) => { 
      Swal.fire({
        icon: 'warning',
        title: 'Do you want to delete this?',
        showCancelButton: true,
        confirmButtonText: 'Save',
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          props.deleteItems(itemId);
          Swal.fire('Deleted Successfully !', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
    }
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
                        <a href={void(0)} data-mdb-toggle="tooltip" title="Done" onClick={() => { handleClick(item.id) }}> <FontAwesomeIcon icon={faCheckCircle} style={{cursor:'pointer', color : item.completed ? 'green':'#a1a1a1'}}/> </a>
                        <span style={{cursor:'pointer'}} data-mdb-toggle="tooltip" title="Edit" onClick={()=>setShowEditModal(true)}>
                          <FontAwesomeIcon icon={faEdit} /></span>
                        <a href={void(0)} style={{color:'red',cursor:'pointer'}} data-mdb-toggle="tooltip" title="Remove" onClick={()=>deleteTask(item.id)}><FontAwesomeIcon icon={faTrash} /></a>
                      </td>
                    </tr>
                    ))}
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
