import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  //Form State
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    subject: '',
    message: '',
  });

  //Handeling onChange Event
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  //Handeling onSubmit Event
  const handleSubmit = (e) => {
    setFormData({
      username: '',
      email: '',
      subject: '',
      message: '',
    });
    console.log('Submitted');
  };

  return (
    <div className="w-full max-w-[500px] mx-auto shadow-xl px-4 py-10 rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-3"
      >
        <input
          required
          className="col-span-1 py-1 px-3 border-2 rounded-xl"
          onChange={handleChange}
          placeholder="Name"
          type="text"
          name="username"
          value={formData.username}
        />
        <input
          required
          className="col-span-1 py-1 px-3 border-2 rounded-xl"
          onChange={handleChange}
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
        />
        <input
          required
          className="col-span-2 py-1 px-3 border-2 rounded-xl"
          onChange={handleChange}
          placeholder="Subject"
          type="text"
          name="subject"
          value={formData.subject}
        />
        <textarea
          required
          className="col-span-2 py-1 px-3 border-2 rounded-xl"
          onChange={handleChange}
          placeholder="Message"
          name="message"
          value={formData.message}
          cols="20"
          rows="5"
        ></textarea>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="col-span-2 text-red-600 font-bold tracking-widest p-1 border-2 rounded-xl max-w-max px-8 mx-auto"
          type="submit"
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
