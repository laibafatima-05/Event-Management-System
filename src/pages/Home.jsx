import { useState } from 'react'
import Hero from './Hero'
import About from './About'
import EventCategories from './EventCategories'
import Testimonials from './Testimonials'
import CreateEvent from './CreateEvent'
import './Home.css'

function Home() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Hero onCreateEvent={() => setShowModal(true)} />

      <About />
      <EventCategories />
      <Testimonials />

      <section className="offer-section">
        <h2>Make Your Next Event Memorable</h2>
        <p>Start planning your special occasion today.</p>
        <button
          className="btn btn-light"
          onClick={() => setShowModal(true)}
        >
          Get Started
        </button>
      </section>

      {showModal && (
        <CreateEvent onClose={() => setShowModal(false)} />
      )}
    </>
  )
}

export default Home
