import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-3">
            <h4>Event Venue.</h4>
            <p>Making your special moments unforgettable.</p>
          </div>

          <div className="col-md-3">
            <h5>Quick Links</h5>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/events">Events</Link></p>
            <p><Link to="/create-event">Create Event</Link></p>
          </div>

          <div className="col-md-3">
            <h5>Our Services</h5>
            <p>Wedding Events</p>
            <p>Music Events</p>
            <p>Corporate Events</p>
          </div>

          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>info@eventvenue.com</p>
            <p>+123 456 789</p>
          </div>
        </div>
      </div>

      <div className="copyright">
        © 2026 Event Venue. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer