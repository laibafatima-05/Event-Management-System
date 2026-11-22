
import './Testimonials.css'

function Testimonials() {

  const reviews = [
    {
      name: 'Ayesha Khan',
      review: 'Amazing event management and wonderful experience!'
    },
    {
      name: 'Ali Ahmed',
      review: 'Everything was perfectly organized. Highly recommended!'
    },
    {
      name: 'Fatima Malik',
      review: 'Beautiful arrangements and excellent event services.'
    },
    {
      name: 'Usman Siddiqui',
      review: 'Very professional team and a memorable experience!'
    }
  ]

  return (
    <section className="container py-5 testimonials-section">

      <div className="text-center testimonial-heading">
        <span className="small-heading">CUSTOMER FEEDBACK</span>
        <h2>What Our Customers Say</h2>
        <p>See what our customers think about our services.</p>
      </div>

      <div className="row g-4 mt-4">

        {reviews.map((item) => (

          <div className="col-12 col-sm-6 col-lg-3" key={item.name}>

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
