
import './Testimonials.css'

function Testimonials() {

  const reviews = [
    {
      name: 'Maria Smith',
      review: 'Amazing event management and wonderful experience!'
    },
    {
      name: 'Tony Doe',
      review: 'Everything was perfectly organized. Highly recommended!'
    }
  ]

  return (
    <section className="container py-5 testimonials-section">

      {/* Section Heading */}

      <div className="text-center testimonial-heading">
        <span className="small-heading">CUSTOMER FEEDBACK</span>

        <h2>What Our Customers Say</h2>

        <p>See what our customers think about our services.</p>
      </div>

      {/* Customer Reviews */}

      <div className="row g-4 mt-4">

        {reviews.map((item) => (

          <div className="col-12 col-md-6" key={item.name}>

            <div className="review-card h-100">

              <div className="review-icon">
                "
              </div>

              <h5>{item.name}</h5>

              <p>{item.review}</p>

              <div className="review-stars">
                ★★★★★
              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Testimonials
