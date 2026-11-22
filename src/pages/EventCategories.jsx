
import { useState } from 'react'
import './EventCategories.css'

function EventCategories() {

  const [selectedCategory, setSelectedCategory] = useState(null)

  const categories = [
    {
      name: 'Wedding',
      image: '/images/wedding.jpg',
      events: [
        {
          title: 'Grand Wedding Ceremony',
          date: 'Coming Soon',
          location: 'Wedding Hall',
          description: 'A beautiful wedding celebration with elegant decorations.'
        },
        {
          title: 'Mehndi Night',
          date: 'Coming Soon',
          location: 'Outdoor Venue',
          description: 'Enjoy a colorful mehndi event with music and traditions.'
        }
      ]
    },
    {
      name: 'Music',
      image: '/images/music.jpg',
      events: [
        {
          title: 'Live Music Concert',
          date: 'Coming Soon',
          location: 'Concert Hall',
          description: 'Enjoy an amazing live music performance.'
        },
        {
          title: 'Musical Night',
          date: 'Coming Soon',
          location: 'Main Auditorium',
          description: 'An exciting evening filled with music and entertainment.'
        }
      ]
    },
    {
      name: 'Corporate',
      image: '/images/corporate.jpg',
      events: [
        {
          title: 'Business Conference',
          date: 'Coming Soon',
          location: 'Conference Hall',
          description: 'A professional gathering for business discussions.'
        },
        {
          title: 'Corporate Dinner',
          date: 'Coming Soon',
          location: 'Banquet Hall',
          description: 'A formal dinner event for corporate professionals.'
        }
      ]
    },
    {
      name: 'Birthday',
      image: '/images/birthday.jpg',
      events: [
        {
          title: 'Birthday Celebration',
          date: 'Coming Soon',
          location: 'Party Hall',
          description: 'Celebrate special moments with friends and family.'
        },
        {
          title: 'Kids Birthday Party',
          date: 'Coming Soon',
          location: 'Indoor Venue',
          description: 'A fun-filled birthday party with beautiful decorations.'
        }
      ]
    }
  ]

  return (
    <section className="container py-5 event-categories">

      {/* Section Heading */}

      <div className="text-center category-heading">
        <span className="small-heading">EXPLORE WITH US</span>
        <h2>Our Event Categories</h2>
        <p>Discover the perfect event for every special moment.</p>
      </div>

      {/* Category Cards */}

      <div className="row g-4 mt-3">

        {categories.map((item) => (
          <div className="col-12 col-sm-6 col-lg-3" key={item.name}>

            <div className="category-card">

              <div className="category-image">
                <img src={item.image} alt={item.name} />
              </div>

              <h5>{item.name} Events</h5>

              <button
                className="btn purple-btn"
                onClick={() => setSelectedCategory(item)}
              >
                View Events
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Category Events Modal */}

      {selectedCategory && (

        <div className="event-modal-overlay container-fluid d-flex align-items-center justify-content-center p-3">

          <div className="event-modal col-12 col-md-8 col-lg-6">

            {/* Modal Header */}

            <div className="modal-header">
              <h4>{selectedCategory.name} Events</h4>

              <button
                className="modal-close"
                onClick={() => setSelectedCategory(null)}
              >
                &times;
              </button>
            </div>

            {/* Modal Body */}

            <div className="modal-body">

              {selectedCategory.events.map((event, index) => (

                <div className="modal-event-card" key={index}>

                  <h5>{event.title}</h5>

                  <p>{event.description}</p>

                  <div className="event-details">
                    <span>
                      <strong>Date:</strong> {event.date}
                    </span>

                    <span>
                      <strong>Venue:</strong> {event.location}
                    </span>
                  </div>

                </div>

              ))}

            </div>

            {/* Modal Footer */}

            <div className="modal-footer">

              <button
                className="btn purple-btn"
                onClick={() => setSelectedCategory(null)}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </section>
  )
}

export default EventCategories
