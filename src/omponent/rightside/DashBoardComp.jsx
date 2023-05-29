import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';

import "../../index.css"
const DashBoardComp = () => {
  return (
    <div className="header">
      <div className="left-side">
        <span>Dashboard</span>
      </div>
      <div className="right-side">
        <div className="search-box">
          <input type="text" placeholder="Search..." className="search-input" />
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
        <div className="notification-icon">
          <FontAwesomeIcon icon={faBell} />
        </div>
        <div className="user-icon">
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
    </div>
  )
}

export default DashBoardComp