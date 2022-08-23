import { useState } from "react"
import Modal from "../modal/Modal"


import './AddNewTodo.style.css'
import TodoForm from "../todoForm/TodoForm";

const AddNewTodo = () => {
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState('');
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const projects = [
    {id: 1, name: 'personal', numOfTodos: 0},
    {id: 2, name: 'work', numOfTodos: 1},
    {id: 3, name: 'other', numOfTodos: 2}
  ]

  function handleSubmit(e){

  }

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button onClick={() => setShowModal(true)}>
          + New Todo
        </button>
      </div>     
      <Modal showModal={showModal} setShowModal={setShowModal}>
          <TodoForm
            backGround='white'
            handleSubmit={handleSubmit}
            heading='Add new to do!'
            text={text}
            setText={setText}
            day={day}
            setDay={setDay}
            time={time}
            setTime={setTime}
            projects={projects}
            showButton={true}
            setShowModal={setShowModal}
          />
      </Modal>
    </div>
  )
}

export default AddNewTodo
