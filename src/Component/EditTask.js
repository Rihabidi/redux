import {Button,Modal} from 'react-bootstrap'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { editTask } from '../Redux/action';


function  EditTask({task}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch= useDispatch()

  const handleClick = ()=>{
      dispatch(editTask(task.id, edittask  )) ;
      handleClose()
  }
    const [edittask,setEdittask]= useState(task.text)
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <input   value ={edittask}   onChange={(e)=>setEdittask(e.target.value)}    ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={ handleClick   }>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default EditTask 