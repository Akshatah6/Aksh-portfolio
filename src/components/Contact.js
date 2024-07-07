import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <div className="input-group">
          <label>Name</label>
          <input type="text" required />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" required />
        </div>
        <div className="input-group">
          <label>Message</label>
          <textarea required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
