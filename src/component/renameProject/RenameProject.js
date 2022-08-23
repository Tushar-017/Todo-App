import { useState } from "react"
import ProjectForm from "../projectForm/ProjectForm"

const RenameProject = ({project, setShowModal}) => {
  const[newProjectName,setNewProjectName] = useState(project.name);
  function handleSubmit(e){

  }

  return (
    <div className='RenameProject'>
      <ProjectForm
        handleSubmit={handleSubmit}
        heading='Edit project name!'
        value={newProjectName}
        setValue={setNewProjectName}
        setShowModal={setShowModal}
        confirmButtonText='Confirm'
      />
    </div>
  )
}

export default RenameProject
