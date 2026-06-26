import { useState } from 'react';

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // no backend here, just fake a success message and clear the fields
  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Message sent! We'll get back to you soon.");
    setForm({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">We'd love to hear from you</p>

        <div className="contact-grid">
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your full name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can we help you?" required value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary btn-full">Send Message</button>
            </form>
          </div>
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176767906445!2d-73.98784492404518!3d40.75797623540885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%" height="100%" style={{ border: 0, borderRadius: 12 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location on Google Maps"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
