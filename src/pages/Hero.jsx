
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero({ onCreateEvent }) {
  return (
    <section className="hero d-flex align-items-center py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-10 col-lg-8">

            <span className="hero-tag">
              MAKE EVERY MOMENT SPECIAL
            </span>

            <h1 className="my-3">
              Let's Create<br />
              Unforgettable Events
            </h1>

            <p className="mb-4">
              Plan, organize and celebrate your special moments.
            </p>

            <div className="d-flex flex-wrap gap-2">
              <Link to="/events" className="btn purple-btn">
                Explore Events
              </Link>

              <button
                className="btn outline-btn"
                onClick={onCreateEvent}
              >
                Create Event
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
