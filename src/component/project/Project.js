import { Pencil, XCircle } from "react-bootstrap-icons"

import RenameProject from "../renameProject/RenameProject"
import Modal from "../modal/Modal"
import { useContext, useState } from "react"

import './Project.style.css';
import { TodoContext } from "../../context";
import firebase from '../../firebase/index'
import { useSpring,animated, useTransition } from "react-spring";


const Project = ({project, edit}) => {
  // Context
  const {defaultProject, selectedProject, setSelectedProject} = useContext(TodoContext);
  // State
  const [showModal,setShowModal] = useState(false)

  // ANIMATION
  const fadeIn = useSpring({
    from: {marginTop:'-12px', opacity: 0},
    to: {marginTop:'0px', opacity:1}
  })
  const btnTransitions = useTransition(edit, {
    from: {opacity:0, right: '-20px'},
    enter: {opacity:1, right: '0px'},
    leave: {opacity:0, right: '-20px'}
  })

  const deleteProject = project => {
    firebase
      .firestore()
      .collection('projects')
      .doc(project.id)
      .delete()
      .then(() => {
        firebase
          .firestore()
          .collection('todos')
          .where('projectName','==',project.name)
          .get()
          .then((querySnapshot) => {
            querySnapshot.forEach(doc => {
              doc.ref.delete( )
            })
          })
      })
      .then(() => {
        if(selectedProject === project.name){
          setSelectedProject(defaultProject);
        }
      })
  }

  return (
    <animated.div style={fadeIn} className="Project">
      <div
        className="name"
        onClick={() => setSelectedProject(project.name)}
      >
        {project.name}
      </div>
      <div className="btns">
        {
          btnTransitions((props,editProject) => 
          editProject ?
          <animated.div style={props} className="edit-delete">
            <span className='edit' onClick={() => setShowModal(true)}>
              <Pencil size={13}/>
            </span>
            <span 
              className="delete"
              onClick={() => deleteProject(project )}
            >
              <XCircle size={13}/>
            </span>
          </animated.div>
          : 
          project.numOfTodos === 0 ?
          ""
          : 
          <animated.div style={props} className="total-todos">
            {project.numOfTodos}
          </animated.div>
          )
        }
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} >
        <RenameProject project={project} setShowModal={setShowModal} />
      </Modal>
    </animated.div>
  )
}

export default Project
