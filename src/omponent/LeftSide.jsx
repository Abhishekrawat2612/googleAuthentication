import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faCog, faCalendarAlt, faUser, faTags } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

import "../index.css"
const LeftSide = () => {
  return (
    <div className="parent-div">
    <div className="child-div1">Board.</div>
        <div className="child-div2">
            <p>
            <FontAwesomeIcon icon={faDashboard} />
            <span className='spanTag'>DashBoard</span>
            </p>

            <p>
            <FontAwesomeIcon icon={faTags} />
            <span className='spanTag'>Transcription</span>
            </p>

            <p>
            <FontAwesomeIcon icon={faCalendarAlt} />
            <span className='spanTag'>Schedule</span>
            </p>

            <p>
            <FontAwesomeIcon icon={faUser} />
            <span className='spanTag'>Users</span>
            </p>

            <p>
            <FontAwesomeIcon icon={faCog} />
            <span className='spanTag'>Setting</span>
            </p>
        </div>
        <div className="child-div3">
            <p>Help</p>
            <p>Contact Us</p>
        </div>
    </div>
  )
}

export default LeftSide