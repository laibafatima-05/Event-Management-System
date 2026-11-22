
import './About.css'

function About() {
  return (
    <section className="about-section py-5">
      <div className="container-fluid px-2">

        {/* About Heading */}
        <div className="text-center mb-5">
          <span className="about-label">GET TO KNOW US</span>
          <h2 className="about-main-title">About Us</h2>
          <div className="about-line mx-auto"></div>
        </div>

        <div className="row align-items-center g-4 g-lg-5">

          {/* Image */}
          <div className="col-12 col-lg-6">
            <img
              src="/images/about.jpg"
              className="img-fluid w-100 about-img"
              alt="Event planning"
            />
          </div>

          {/* Content */}
          <div className="col-12 col-lg-6 about-text">

            <span className="small-heading">
              ABOUT OUR SERVICES
            </span>

            <h2 className="mt-3">
              We Make Your Events
              <span> Special</span>
            </h2>

            <p className="mt-3">
              From beautiful weddings to exciting music nights
              and professional corporate gatherings, we help
              you organize memorable events with ease.
            </p>

            <p>
              Our goal is to make every occasion special by
              bringing your ideas to life with creativity,
              care and perfect planning.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
