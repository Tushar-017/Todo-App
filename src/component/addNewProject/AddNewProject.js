import { useState } from "react"
import { Plus } from "react-bootstrap-icons"

import Modal from '../modal/Modal'
import ProjectForm from "../projectForm/ProjectForm"
import firebase from "../../firebase"

import './AddNewProject.style.css'

const AddNewProject = () => {
  const [showModal, setShowModal] = useState(false);
  const [projectName, setProjectName] = useState('');
  
  function handleSubmit(e){
    e.preventDefault();
    if(projectName){
      const projectRef = firebase.firestore().collection('projects')

      projectRef
        .where('name', '==', projectName)
        .get()
        .then(querySnapshot => {
          if(querySnapshot.empty){
            projectRef
              .add(
                {
                  name: projectName,
                }
              )
          }else {
            alert('Project already exists!')
          }
        })
        setShowModal(false)
        setProjectName('')
    }
  }

  return (
    <div className="AddNewProject">
      <div className="add-button">
        <span onClick={() => setShowModal(true)}>
          <Plus size={20} />
        </span>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <ProjectForm
          handleSubmit={handleSubmit}
          heading='New Project!'
          value={projectName}
          setValue={setProjectName}
          setShowModal={setShowModal}
          confirmButtonText='Add project'
        />
      </Modal>
    </div>
  )
}

export default AddNewProject
