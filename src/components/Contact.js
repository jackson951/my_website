import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="heading">Contact Me</div>
      <div className="contact">
        <form action="submit_form.php" method="POST">
          <div className="input-group">
            <div className="input-box">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="input-box">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
          </div>
          <div className="input-group-2">
            <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;