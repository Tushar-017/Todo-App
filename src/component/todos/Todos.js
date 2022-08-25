import Todo from '../todo/Todo'
import Next7Days from '../next7Days/Next7Days'

import './Todos.style.css'
import { useContext } from 'react'
import { TodoContext } from '../../context'

const Todos = () => {
  const {todos, selectedProject} = useContext(TodoContext)

  return (
    <div className='Todos'>
      <div className="selected-project">
        {selectedProject}
      </div>
      <div className="todos">
        {
          selectedProject === 'next 7 days' ?
          <Next7Days todos={todos} />
          :
          todos.map(todo => 
            <Todo todo={todo} key={todo.id} />
          )
        }
      </div>
    </div>
  )
}

export default Todos
