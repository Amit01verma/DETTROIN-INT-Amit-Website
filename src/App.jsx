import { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const navLinks = [
  { label: "Home", key: "home" },
  { label: "About", key: "about" },
  { label: "Admissions", key: "admissions" },
  { label: "Gallery", key: "gallery" },
];

const academicStages = [
  {
    title: "Pre-Primary",
    text: "Joyful learning through play, language, numeracy, and social interaction.",
  },
  {
    title: "Primary",
    text: "Strong reading, writing, and math foundations with curiosity-led learning.",
  },
  {
    title: "Middle",
    text: "Analytical thinking, communication, and leadership skills for growing minds.",
  },
  {
    title: "Daycare",
    text: "A safe and caring environment with attentive support and engaging activities.",
  },
];

const features = [
  {
    title: "Strong Academic System",
    text: "Well-planned lessons, regular revision, assessments, and personal guidance.",
  },
  {
    title: "Concept-Based Learning",
    text: "Students learn to think critically, solve problems, and understand concepts deeply.",
  },
  {
    title: "Experienced Faculty",
    text: "Teachers are caring, dedicated, and committed to every child’s success.",
  },
  {
    title: "Safe Campus",
    text: "CCTV monitoring, supervised spaces, and disciplined systems keep students secure.",
  },
];

const testimonials = [
  {
    quote:
      "The school is safe, welcoming, and encourages children to do their best every day.",
    name: "Rakesh Sharma",
  },
  {
    quote:
      "My daughter enjoys learning, sports, and creativity here while growing in confidence.",
    name: "Neha Verma",
  },
  {
    quote:
      "Teachers are patient, kind, and deeply committed to making learning exciting.",
    name: "Amit Gupta",
  },
];

const faqs = [
  {
    question: "Where is the school located?",
    answer:
      "Excellence International School is located on Ramghat Road, Aligarh, Uttar Pradesh.",
  },
  {
    question: "Which classes are available?",
    answer:
      "We offer learning from pre-primary to middle school with a structured and caring approach.",
  },
  {
    question: "Does the school include extracurricular activities?",
    answer:
      "Yes, students participate in sports, arts, leadership programs, and life skills activities.",
  },
  {
    question: "Is transportation available?",
    answer:
      "Safe transportation services are available for students with scheduled routes.",
  },
];

const admissionSteps = [
  {
    title: "Visit the Campus",
    text: "Meet our team, explore the classrooms, and learn about the school environment.",
  },
  {
    title: "Submit the Form",
    text: "Fill in the enquiry form with your child’s details and preferred grade.",
  },
  {
    title: "Assessment & Interaction",
    text: "We arrange a friendly interaction and assessment to understand readiness.",
  },
  {
    title: "Admission Confirmation",
    text: "Once approved, we share the next steps for fee payment and orientation.",
  },
];

const galleryItems = [
  {
    title: "Classroom Learning",
    text: "Bright, interactive spaces designed for focus and curiosity.",
    image: "/classroom.jpg",
  },
  {
    title: "Sports Day",
    text: "Students enjoy movement, teamwork, and healthy competition.",
    image: "/Sports.jpg",
  },
  {
    title: "Creative Arts",
    text: "Art and cultural activities help children express themselves boldly.",
    image: "/Arts.jpg",
  },
  {
    title: "Campus Events",
    text: "Celebrations and events build confidence and community spirit.",
    image: "/Events.jpg",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [currentPage, setCurrentPage] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const heroStats = useMemo(
    () => [
      { value: "25+", label: "Years of Excellence" },
      { value: "100%", label: "Value-Based Education" },
      { value: "24/7", label: "Student Support" },
    ],
    [],
  );

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) nextErrors.email = "Please enter your email.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      nextErrors.email = "Please enter a valid email.";
    if (!formData.message.trim())
      nextErrors.message = "Please share your message.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    setErrors({});
    setFormData({ name: "", email: "", message: "" });
  };

  const handleNav = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="topbar">
        <div className="container nav-wrap">
          <button
            type="button"
            className="brand"
            onClick={() => handleNav("home")}
          >
            <img
              src="Excellence-Logo.png.webp"
              alt="Excellence International School logo"
            />
            <span>Excellence International School</span>
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <button
                key={link.key}
                type="button"
                className={`nav-link ${currentPage === link.key ? "active" : ""}`}
                onClick={() => handleNav(link.key)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {currentPage === "home" ? (
          <>
            <section className="hero">
              <div className="container hero-grid">
                <div className="hero-copy" data-aos="fade-right">
                  <p className="eyebrow">
                    WELCOME TO EXCELLENCE INTERNATIONAL SCHOOL
                  </p>

                  <h1>
                    Inspiring Young Minds,
                    <br />
                    Building Bright Futures
                  </h1>

                  <p className="hero-text">
                    Discover a future-focused learning environment where
                    academic excellence, creativity, leadership, and character
                    development empower every student to achieve their fullest
                    potential.
                  </p>
                  <div className="hero-actions">
                    <a href="#contact" className="btn btn-primary">
                      Apply for Admission →
                    </a>

                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => handleNav("about")}
                    >
                      Explore Campus
                    </button>
                  </div>
                </div>

                <div className="hero-card" data-aos="fade-left">
                  <img
                    src="HeroImage.jpg"
                    alt="Students learning in a classroom"
                  />
                  <div className="hero-stat">
                    <div className="hero-badge">
                      ⭐ Trusted by 1000+ Parents
                    </div>
                  </div>
                </div>
              </div>
            </section>
           <div className="container">
  <div className="hero-metrics">
    {heroStats.map((stat) => (
      <div key={stat.label}>
        <strong>{stat.value}</strong>
        <span>{stat.label}</span>
      </div>
    ))}
  </div>
</div>
            <section id="about" className="section">
              <div className="container">
              <div className="about-grid" data-aos="fade-up">
                <div>
                  <p className="eyebrow">About Us</p>
                  <h2>
                    Building confident, responsible, and innovative learners
                  </h2>
                  <p>
                    We believe education should nurture knowledge, critical
                    thinking, discipline, and life skills. Our student-focused
                    approach helps each child grow into a confident and
                    responsible individual.
                  </p>
                  <div className="pill-list">
                    <span>Vision</span>
                    <span>Mission</span>
                    <span>Values</span>
                  </div>
                </div>
                <div className="about-card" data-aos="zoom-in">
                  <h3>Our Vision</h3>
                  <p>
                    To create confident, responsible, and innovative individuals
                    who contribute positively to society.
                  </p>
                  <h3>Our Mission</h3>
                  <ul>
                    <li>Deliver high-quality education</li>
                    <li>Encourage curiosity and creativity</li>
                    <li>Build strong academic foundations</li>
                    <li>Promote discipline and ethical values</li>
                  </ul>
                </div>
              </div>
              </div>
            </section>

            <section id="academics" className="section section-alt">
              <div className="container">
                <div className="section-heading">
                  <p className="eyebrow">Academic Stages</p>
                  <h2>Learning journeys designed for every age</h2>
                </div>
                <div className="cards-grid">
                  {academicStages.map((stage) => (
                    <article
                      key={stage.title}
                      className="card"
                      data-aos="fade-up"
                    >
                      <h3>{stage.title}</h3>
                      <p>{stage.text}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section id="why-us" className="section">
              <div className="container">
                <div className="section-heading">
                  <p className="eyebrow">Why Choose Us</p>
                  <h2>
                    Smart academics, strong values, and modern opportunities
                  </h2>
                </div>
                <div className="feature-list">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="feature-item"
                      data-aos="fade-up"
                    >
                      <h3>{feature.title}</h3>
                      <p>{feature.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="section section-alt">
              <div className="container split-panel">
                <div>
                  <p className="eyebrow">Holistic Development</p>
                  <h2>Sports, arts, leadership, and life skills</h2>
                  <p>
                    Our students explore creativity, physical fitness, teamwork,
                    public speaking, and responsible citizenship through
                    well-rounded activities.
                  </p>
                </div>
                <div className="bullet-box">
                  <h3>Our Learning Approach</h3>
                  <ul>
                    <li>Sports and physical education</li>
                    <li>Cultural and creative activities</li>
                    <li>Personality development</li>
                    <li>Transport and safety support</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container">
                <div className="section-heading">
                  <p className="eyebrow">Value-Based Education</p>
                  <h2>
                    Every child grows with honesty, respect, and responsibility
                  </h2>
                </div>
                <div className="values-grid">
                  {[
                    "Honesty",
                    "Integrity",
                    "Respect",
                    "Discipline",
                    "Compassion",
                    "Responsibility",
                  ].map((value) => (
                    <div key={value} className="value-pill">
                      {value}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="testimonials" className="section section-alt">
              <div className="container">
                <div className="section-heading">
                  <p className="eyebrow">Testimonials</p>
                  <h2>Parents trust us with their child’s future</h2>
                </div>
                <div className="testimonial-grid">
                  {testimonials.map((item) => (
                    <article
                      key={item.name}
                      className="testimonial-card"
                      data-aos="zoom-in"
                    >
                      <p>“{item.quote}”</p>
                      <strong>{item.name}</strong>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section">
              <div className="container faq-grid">
                <div>
                  <p className="eyebrow">FAQs</p>
                  <h2>Questions parents often ask</h2>
                  <p>
                    We make it easy for families to understand our approach,
                    safety measures, and learning environment.
                  </p>
                </div>
                <div className="faq-list">
                  {faqs.map((item, index) => {
                    const open = activeFaq === index;
                    return (
                      <div
                        key={item.question}
                        className={`faq-item ${open ? "open" : ""}`}
                      >
                        <button
                          type="button"
                          className="faq-question"
                          onClick={() => setActiveFaq(open ? -1 : index)}
                        >
                          <span>{item.question}</span>
                          <span>{open ? "−" : "+"}</span>
                        </button>
                        {open && <p>{item.answer}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="page-hero">
              <div className="container page-hero-grid">
                <div>
                  <p className="eyebrow">
                    {currentPage === "about"
                      ? "About us"
                      : currentPage === "admissions"
                        ? "Admissions"
                        : "Gallery"}
                  </p>
                  <h1>
                    {currentPage === "about"
                      ? "A warm, value-driven learning community"
                      : currentPage === "admissions"
                        ? "A simple pathway to join our school"
                        : "A glimpse into school life and celebrations"}
                  </h1>
                  <p className="hero-text">
                    {currentPage === "about"
                      ? "We focus on academic strength, character building, and lifelong curiosity in a supportive environment."
                      : currentPage === "admissions"
                        ? "We welcome families who want a balanced education guided by care, discipline, and opportunity."
                        : "From classrooms to ceremonies, our campus is full of moments that shape confident learners."}
                  </p>
                  <div className="hero-actions">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleNav("home")}
                    >
                      Return Home
                    </button>
                  </div>
                </div>
                <div className="info-card">
                  <h3>
                    {currentPage === "about"
                      ? "Why parents choose us"
                      : currentPage === "admissions"
                        ? "Admissions support"
                        : "Campus highlights"}
                  </h3>
                  <p>
                    {currentPage === "about"
                      ? "Our educational approach ensures every child feels seen, supported, and challenged to grow."
                      : currentPage === "admissions"
                        ? "Our team offers guidance from the first enquiry to the final onboarding step."
                        : "The school experience is enriched by projects, activities, and memorable moments."}
                  </p>
                </div>
              </div>
            </section>

            {currentPage === "about" && (
              <section className="section">
                <div className="container about-page-grid">
                  <div className="info-card">
                    <h3>Our philosophy</h3>
                    <p>
                      We create a nurturing environment where students discover
                      their potential through meaningful lessons, values, and
                      responsibility.
                    </p>
                    <ul>
                      <li>Strong academic foundations</li>
                      <li>Focus on character and communication</li>
                      <li>Safe and encouraging campus culture</li>
                    </ul>
                  </div>
                  <div className="info-card">
                    <h3>Facilities and support</h3>
                    <p>
                      From interactive classrooms to guided mentorship, we
                      provide the support needed for students to thrive.
                    </p>
                    <ol>
                      <li>Experienced teaching staff</li>
                      <li>Well-structured academic planning</li>
                      <li>Sports, arts, and life skill programs</li>
                    </ol>
                  </div>
                </div>
              </section>
            )}

            {currentPage === "admissions" && (
              <section className="section">
                <div className="container admissions-grid">
                  <div className="info-card">
                    <h3>Admission process</h3>
                    <ul className="process-list">
                      {admissionSteps.map((step, index) => (
                        <li key={step.title}>
                          <span>{index + 1}</span>
                          <div>
                            <strong>{step.title}</strong>
                            <p>{step.text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="info-card">
                    <h3>Required documents</h3>
                    <ul>
                      <li>Birth certificate or age proof</li>
                      <li>Previous school report card</li>
                      <li>Address and parent contact details</li>
                      <li>Passport-size photographs</li>
                    </ul>
                  </div>
                </div>
              </section>
            )}

            {currentPage === "gallery" && (
              <section className="section">
                <div className="container">
                  <div className="gallery-grid">
                    {galleryItems.map((item) => (
                      <article
                        key={item.title}
                        className="gallery-card"
                        data-aos="zoom-in-up"
                      >
                        <div className="gallery-visual">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        <section id="contact" className="section section-alt footer-section">
          <div className="container footer-grid">
            <div>
              <p className="eyebrow">Contact Us</p>
              <h2>
                Let’s welcome your child to a place of growth and opportunity.
              </h2>
              <p>Ramghat Road, Aligarh, Uttar Pradesh, India</p>
              <p>
                <a href="tel:+917055582117">Phone: +91 7055582117</a>
              </p>
              <p>
                <a href="mailto:info@excellenceinternationalschool.com">
                  Email: info@excellenceinternationalschool.com
                </a>
              </p>
            </div>

            <div className="contact-card">
              <h3>Quick Enquiry</h3>
              <form onSubmit={handleSubmit} noValidate>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <span className="error-text">{errors.name}</span>
                )}
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="error-text">{errors.email}</span>
                )}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {errors.message && (
                  <span className="error-text">{errors.message}</span>
                )}
                <button type="submit">Send Enquiry</button>
                {submitted && (
                  <p className="success-text">
                    Thank you! Your enquiry has been received.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-bottom">
          <p>© 2026 Excellence International School. All rights reserved.</p>
          <p>Designed with React for internship practice.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
