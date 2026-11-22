
import { useState } from 'react'
import './Events.css'

function Events() {

  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem('events')) || []
  )

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: ''
  })

  // Delete Event

  function deleteEvent(id) {
    if (window.confirm('Delete this event?')) {

      const updated = events.filter(event => event.id !== id)

      setEvents(updated)
      localStorage.setItem('events', JSON.stringify(updated))
    }
  }

  // Close Registration Modal

  function closeModal() {
    setSelectedEvent(null)

    setForm({
      name: '',
      email: '',
      phone: ''
    })
  }

  // Event Registration

  function register(e) {
    e.preventDefault()

    const registrations =
      JSON.parse(localStorage.getItem('registrations')) || []

    registrations.push({
      ...form,
      eventId: selectedEvent.id,
      eventName: selectedEvent.title,
      id: Date.now(),
      date: new Date().toLocaleDateString()
    })

    localStorage.setItem('registrations', JSON.stringify(registrations))

    alert('Registration successful!')

    closeModal()
  }

  // Search and Category Filter

  const filteredEvents = events.filter(event =>
    (event.title || '').toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || event.category === category)
  )

  return (

    <section className="container py-5 events-section">

      {/* Page Heading */}

      <div className="events-heading">

        <span className="small-heading">DISCOVER EVENTS</span>

        <h2>All Events</h2>

        <p>Explore and register for exciting upcoming events.</p>

      </div>

      {/* Search and Category Filter */}

      <div className="row g-3 events-filters">

        <div className="col-12 col-md-6">

          <input
            type="text"
            className="form-control event-search"
            placeholder="Search events..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

        </div>

        <div className="col-12 col-md-6">

          <select
            className="form-select event-filter"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >

            <option value="All">All Categories</option>
            <option value="Wedding">Wedding</option>
            <option value="Music">Music</option>
            <option value="Corporate">Corporate</option>
            <option value="Birthday">Birthday</option>

          </select>

        </div>

      </div>

      {/* Events Cards */}

      <div className="row g-4 mt-2">

        {filteredEvents.map(event => (

          <div
            className="col-12 col-sm-6 col-lg-4 d-flex"
            key={event.id}
          >

            <div className="event-card w-100">

              <div className="event-card-content">

                <span className="event-category">
                  {event.category}
                </span>

                <h5>{event.title}</h5>

                <p className="event-description">
                  {event.description}
                </p>

                <div className="event-info">

                  <p>
                    <strong>Date:</strong> {event.date}
                  </p>

                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>

                </div>

                <div className="event-actions">

                  <button
                    className="btn purple-btn"
                    onClick={() => setSelectedEvent(event)}
                  >
                    Register
                  </button>

                  <button
                    className="btn delete-btn"
                    onClick={() => deleteEvent(event.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* No Events Found */}

      {filteredEvents.length === 0 && (

        <div className="no-events text-center mt-5">

          <h5>No Events Found!</h5>

          <p>Try searching with another name or category.</p>

        </div>

      )}

      {/* Registration Modal */}

      {selectedEvent && (

        <div
          className="registration-modal"
          onClick={closeModal}
        >

          <div
            className="registration-modal-content w-100 mx-2 mx-sm-3 mx-md-0"
            onClick={e => e.stopPropagation()}
          >

            {/* Close Button */}

            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
            >
              &times;
            </button>

            {/* Modal Heading */}

            <div className="form-heading">

              <span className="small-heading">
                EVENT REGISTRATION
              </span>

              <h3>Register Now</h3>

              <p>
                Complete the form to register for your event.
              </p>

            </div>

            {/* Selected Event */}

            <div className="selected-event-name">

              <strong>Event:</strong> {selectedEvent.title}

            </div>

            {/* Registration Form */}

            <form onSubmit={register}>

              <div className="mb-3">

                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                  value={form.name}
                  onChange={e =>
                    setForm({ ...form, name: e.target.value })
                  }
                />

              </div>

              <div className="mb-3">

                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                  value={form.email}
                  onChange={e =>
                    setForm({ ...form, email: e.target.value })
                  }
                />

              </div>

              <div className="mb-4">

                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                  required
                  value={form.phone}
                  onChange={e =>
                    setForm({ ...form, phone: e.target.value })
                  }
                />

              </div>

              {/* Modal Buttons */}

              <div className="row g-2">

                <div className="col-12 col-sm-7">

                  <button
                    type="submit"
                    className="btn purple-btn w-100"
                  >
                    Submit Registration
                  </button>

                </div>

                <div className="col-12 col-sm-5">

                  <button
                    type="button"
                    className="btn cancel-btn w-100"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>

                </div>

              </div>

            </form>

          </div>

        </div>

      )}

    </section>

  )
}

export default Events
