import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'; // Correct import for Ai icons
import { FaUserEdit } from 'react-icons/fa'; // Not used yet, but ready if you need it
import './Nav.css'; // Ensure your CSS is properly linked

function Nav() {
  return (
    <nav>
      {/* Search bar container */}
      <div className="nav-container">
        <input type="text" placeholder="Enter your pokemonss" />
      </div>

      {/* Profile and icons container */}
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" /> {/* Heart Icon */}
        </a>

        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" /> {/* Shopping Cart Icon */}
        </a>

        <a href="#">
          <AiOutlineUserAdd className="nav-icons" /> {/* User Add Icon */}
        </a>
      </div>
    </nav>
  );
}

export default Nav;
