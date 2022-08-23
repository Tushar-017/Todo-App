import { CalendarDate, CaretUp } from "react-bootstrap-icons"
import { calenderItems} from '../../constants/index'

import './Calendar.style.css'

const Calendar = () => {
  
  return (
    <div className="Calendar">
      <div className="header">
        <div className="title">
          <CalendarDate size={18}/>
          <p>Calendar</p>
        </div>
        <div className="btns">
          <span>
            <CaretUp size={20} />
          </span>
        </div>
      </div>
      <div className="items">
        {
          calenderItems.map(item => {
            return(
              <div className="item" key={item}>
                {item}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Calendar
