// attribution to icon site:
// <a href="https://www.flaticon.com/free-icons/writing" title="writing icons">Writing icons created by Freepik - Flaticon</a>
import appLogo from '../assets/note.png'

function Navbar() {
    return (
        <nav>
            <span>
                <img src={appLogo} class="logo" />
                <h4>help me plan</h4>
            </span>
        </nav>

    )
}

export default Navbar