import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: 'Justin Chew',
      from_name: email,
      message: message,
      to_email: 'justinchew9@gmail.com'
    };

    emailjs.send('service_7js25ee', 'template_48q6cjn', templateParams, 'FiBoRLlCE8mwyaxIr')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
      }, (err) => {
        console.error('Failed to send email. Error:', err);
      });
  };

  return (
    <div>
      <h2>Send an Email</h2>
      <form onSubmit={sendEmail}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default EmailForm;
