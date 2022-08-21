import './App.css';

import Sidebar from './component/sidebar/Sidebar';
import Main from './component/main/Main';
import User from './component/user/User';
import AddNewTodo from './component/addNewTodo/AddNewTodo';
import Calendar from './component/Calendar';
import Projects from './component/Projects';
import Todos from './component/Todos';
import EditTodo from './component/EditTodo';


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
