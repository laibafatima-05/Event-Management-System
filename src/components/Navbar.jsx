import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-4 shadow-sm sticky-top">
      <Link className="navbar-brand logo" to="/">Event Venue.</Link>

      <button className="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target="#navbarMenu">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarMenu">
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/events">Events</Link>
          <Link className="nav-link" to="/create-event">Create Event</Link>
          <Link className="nav-link" to="/participants">Participants</Link>
          <Link className="nav-link" to="/history">History</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar