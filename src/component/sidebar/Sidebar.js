import { useContext, useEffect, useRef } from 'react'
import { TodoContext } from '../../context'
import './Sidebar.style.css'
const Sidebar = ({children}) => {
  // CONTEXT
  const {setSelectedTodo} = useContext(TodoContext);

  const sidebarRef = useRef();

  const handleClick = e => {
    if(e.target === sidebarRef.current || sidebarRef.current.contains(e.target)){
      setSelectedTodo(undefined)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => document.removeEventListener('click', handleClick)
  },[])

  return (
    <div className="Sidebar"
      ref={sidebarRef}
    >
      {children}
    </div>
  )
}

export default Sidebar
