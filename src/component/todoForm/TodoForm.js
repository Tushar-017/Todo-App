import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons"

import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

import './TodoForm.style.css'

const TodoForm = ({
  handleSubmit,
  backGround,
  heading = true,
  text, setText,
  day, setDay,
  time, setTime,
  projects,
  showButton = false,
  setShowModal = false
}) => {


  return (
    <form className="TodoForm" style={{backgroundColor: backGround }}>
      <div className="text">
        {
          heading && 
          <h3>{heading}</h3>
        }
        <input 
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder='To do ...'
          autoFocus
        />
      </div>
      <div className="remind">
        <Bell />
        <p>Remind Me</p>
      </div>
      <div className="pick-day">
        <div className="title">
          <CalendarDay/>
          <p>Choose a day</p>
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
          value={day}
          onChange={day => setDay(day)}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
        
      </div>
      <div className="pick-time">
        <div className="title">
          <Clock/>
          <p>Choose time</p>
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <TimePicker
            value={time}
            onChange={time => setTime(time)}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        
      </div>
      <div className="pick-project">
        <div className="title">
          <Palette/>
          <p>Choose a project</p>
        </div>
        <div className="projects">
          {
            projects.map( project => 
              <div className="project" key={project.id}>
                {project.name}
              </div>
            )
          }
        </div>
      </div>
      {
        showButton &&
        <div>
          <div className="cancel" onClick={() => setShowModal(false)}>
            <X size='40'/>
          </div>
          <div className="confirm">
            <button>
              Add to do
            </button>
          </div>
        </div>
      }
    </form>
  )
}

export default TodoForm
