import { useContext, useState } from "react"
import ProjectForm from "../projectForm/ProjectForm"
import firebase from '../../firebase/index'
import {TodoContext} from '../../context/index'

const RenameProject = ({project, setShowModal}) => {
  // CONTEXT
  const {selectedProject, setSelectedProject} = useContext(TodoContext)
  // STATE
  const[newProjectName,setNewProjectName] = useState(project.name);

  const renameProject = (project, newProjectName) => {
    const projectsRef = firebase.firestore().collection('projects');
    const todosRef = firebase.firestore().collection('todos');

    const {name: oldProjectName} = project

    projectsRef
      .where('name','==',newProjectName)
      .get()
      .then(querySnapshot => {
        if(!querySnapshot.empty){
          alert('Project with the same name already exist')
        }else{
          projectsRef
            .doc(project.id)
            .update({
              name: newProjectName
            })
            .then(() => {
              todosRef
                .where('projectName', '==', oldProjectName)
                .get()
                .then(querySnapshot => {
                  querySnapshot.forEach(doc => {
                    doc.ref.update({
                      projectName: newProjectName
                    })
                  })
                })
                .then(() => {
                  if(selectedProject === oldProjectName){
                    setSelectedProject(newProjectName);
                  }
                })
            })
        }
      })
  }

  function handleSubmit(e){
    e.preventDefault()
    renameProject(project, newProjectName)
    setShowModal(false)
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
