import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCamera, faUser, faTag } from '@fortawesome/free-solid-svg-icons';


const MyComptwo = () => {
  return (
    <div className="container">
      <div className="item">
      <FontAwesomeIcon icon={faCamera} />
        <span className="label">Total Revenues</span>
        <span className="price">$2,129,430</span>
      </div>
      <div className="item">
      <FontAwesomeIcon icon={faTag} />
        <span className="label">Total Transactions</span>
        <span className="price">1,520</span>
      </div>
      <div className="item">
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
        <span className="label">Total Likes</span>
        <span className="price">9,721</span>
      </div>
      <div className="item">
      <FontAwesomeIcon icon={faUser} />
        <span className="label">Total Users</span>
        <span className="price">892</span>
      </div>
    </div>
  )
}

export default MyComptwo