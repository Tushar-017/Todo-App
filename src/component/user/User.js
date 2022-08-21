import {ReactComponent as Logo} from "../../images/check.svg"

import './User.style.css'

const User = () => {
  return (
    <div className="User">
      <div className="logo-container">
        <Logo  width={40} height={40} />
      </div>
      <div className="info">
        <p>Code Explained</p>
        <a href='#' >Logout!</a>
      </div>
    </div>
  )
}

export default User
