import './App.css';

import Sidebar from './component/sidebar/Sidebar';
import Main from './component/main/Main';
import User from './component/user/User';
import AddNewTodo from './component/addNewTodo/AddNewTodo';
import Calendar from './component/calendar/Calendar';
import Projects from './component/projects/Projects';
import Todos from './component/todos/Todos';
import EditTodo from './component/editTodo/EditTodo';


function App() {
  return (
      <div className="App">
        <Sidebar>
          <User />
          <AddNewTodo />
          <Calendar />
          <Projects />
        </Sidebar>
        <Main>
          <Todos />
          <EditTodo />
        </Main>
      </div>
  );
}

export default App;
