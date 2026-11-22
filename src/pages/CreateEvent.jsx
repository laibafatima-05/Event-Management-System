import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateEvent.css'

function CreateEvent({onClose}) {
  const navigate = useNavigate()
  function handleClose() {
      if (onClose) {
    onClose()
  } else {
  navigate('/')
  }
}

  const [form, setForm] = useState({
    title: '',
    category: 'Wedding',
    date: '',
    location: '',
    description: ''
  })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const events = JSON.parse(localStorage.getItem('events')) || []

    events.push({
      ...form,
      id: Date.now(),
      image: '/images/event.jpg'
    })

    localStorage.setItem('events', JSON.stringify(events))

    alert('Event created successfully!')
    navigate('/events')
  }

  return (
    <div className="event-modal-overlay" onClick={handleClose}>
      <div
        className="event-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h2>Create New Event</h2>

          <button
            type="button"
            className="modal-close"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <label>Event Title</label>
          <input
            className="form-control mb-3"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
          />

          <label>Category</label>
          <select
            className="form-select mb-3"
            name="category"
            value={form.category}
            onChange={handleChange}
          >
            <option>Wedding</option>
            <option>Music</option>
            <option>Corporate</option>
            <option>Birthday</option>
          </select>

          <label>Event Date</label>
          <input
            type="date"
            className="form-control mb-3"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <label>Location</label>
          <input
            className="form-control mb-3"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            className="form-control mb-3"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />

          <button type="submit" className="btn purple-btn">
            Create Event
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateEvent
