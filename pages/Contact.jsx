import React from 'react';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
const Contact = () => {
  return (
    <div>
      <Hero
        title="Contact"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis quos nam libero beatae numquam ipsum."
      />

      <div className="CenterComponent">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
