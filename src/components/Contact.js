import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xjkbdeqp"); // Replace with your Formspree endpoint ID
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSuccess = (event) => {
    event.preventDefault(); // Prevent default form submission
    handleSubmit(event).then(() => {
      if (state.succeeded) {
        setShowSuccess(true);
        // Clear form fields
        setFormData({ name: '', email: '', message: '' });
      }
    });
  };

  return (
    <section id="contact">
      <div className="heading">Contact Me</div>
      <div className="contact">
        <form onSubmit={handleSuccess}>
          <div className="input-group">
            <div className="input-box">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="input-group-2">
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting} className="btn">
            {state.submitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {showSuccess && (
          <div className="success-message">
            Thanks for your message! We'll get back to you soon.
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
