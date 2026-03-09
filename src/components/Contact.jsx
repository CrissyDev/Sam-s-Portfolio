import React from "react";
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    setIsSubmitted(true);
  };

  return (
    <div className="contact-page-container">
      <div className="contact-content">
        
        {/* Left Side: Contact Information */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
          
          <div className="info-item">
            <strong>Email:</strong> 
            <p>yourname@example.com</p>
          </div>
          
          <div className="info-item">
            <strong>Phone:</strong> 
            <p>+254 712 345 678</p>
          </div>
          
          <div className="info-item">
            <strong>Location:</strong> 
            <p>Nairobi, Kenya</p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-wrapper">
          {isSubmitted ? (
            <div className="thank-you-message">
              <h2>Thank You, {formData.name}!</h2>
              <p>Your message has been sent successfully. We'll be in touch!</p>
              <button onClick={() => setIsSubmitted(false)}>Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <input 
                type="text" name="name" placeholder="Full Name" 
                required value={formData.name} onChange={handleChange} 
              />
              <input 
                type="tel" name="phone" placeholder="Phone Number" 
                required value={formData.phone} onChange={handleChange} 
              />
              <input 
                type="email" name="email" placeholder="Email Address" 
                required value={formData.email} onChange={handleChange} 
              />
              <textarea 
                name="message" placeholder="Your Message" 
                required rows="5" value={formData.message} onChange={handleChange} 
              ></textarea>
              <button type="submit" className="submit-btn">Submit Message</button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default Contact;