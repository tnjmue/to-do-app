// attribution to icon site:
// <a href="https://www.flaticon.com/free-icons/writing" title="writing icons">Writing icons created by Freepik - Flaticon</a>
import appLogo from '../assets/note.png'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="nav">
                <Link to="/" className="flex items-center">
                    <img src={appLogo} className="logo" />
                </Link>
                <Link to="/about" className="flex items-center">
                <h4>help me plan</h4>
                </Link>
            </div>
        </nav>

    )
}

export default Navbar