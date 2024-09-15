import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { BiLoader } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [formError, setFormError] = useState({
    name: false,
    email: false,
    message: false,
  })

  const [isLoading, setIsLoading] = useState(false);

  const notify = () => toast("Successfully Sent!");

  const validateForm = (data) => {
    const errors = {
      name: data.name.length <= 2,
      email: !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(data.email),
      message: data.message.length <= 100,
    }
    setFormError(errors)
    return !Object.values(errors).some(error => error);
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setFormError(prev => ({ ...prev, [name]: false }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (validateForm(formData)) {

      const requestObj = {};
      requestObj.from_name = formData.name;
      requestObj.from_email = formData.email;
      requestObj.message = formData.message;

      let serviceId = import.meta.env.VITE_SERVICE_ID;
      let templateId = import.meta.env.VITE_TEMPLATE_ID;
      let publicKey = import.meta.env.VITE_PUBLIC_KEY;

      setIsLoading(true);
      emailjs
        .send(serviceId, templateId, requestObj, publicKey)
        .then(() => {
          console.log("OK");
          setFormData(() => ({ name: "", email: "", message: "" }));
          notify();
        })
        .catch((err) => {
          console.log(err);
        }).finally(() => {
          setIsLoading(false);
        })

    } else {
      console.log("Form is not valid!")
    }
  }

  return (
    <div id='contact' className='pt-20 min-h-screen'>
      <ToastContainer />
      <div className='sm:w-4/12 p-4 sm:p-0 mx-auto flex flex-col' >
        <h6 className='text-white mt-10'>REACH OUT TO ME</h6>
        <h1 className='bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent text-6xl font-bold'>Contact</h1>

        <form onSubmit={handleOnSubmit} className='my-4'>
          <div className='mb-3'>
            <label htmlFor='name' className='text-white'>Your Name <span className='text-red-500'>*</span></label>
            <input
              className='h-10 w-full p-2 rounded-lg'
              id='name'
              type='text'
              name='name'
              value={formData.name}
              placeholder='Enter your name'
              onChange={handleOnChange}
            />
            {formError.name && <span className='text-red-500 text-sm'>Enter a valid name!</span>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='text-white' >Your Email <span className='text-red-500'>*</span></label>
            <input
              className='h-10 w-full p-2 rounded-lg'
              id='email'
              type='email'
              name='email'
              value={formData.email}
              placeholder='Ex: xyz@gmail.com'
              onChange={handleOnChange}
            />
            {formError.email && <span className='text-red-500 text-sm'>Enter a valid email!</span>}
          </div>
          <div>
            <label htmlFor='message' className='text-white'>Your Message <span className='text-red-500'>*</span></label>
            <textarea
              className='w-full p-2 rounded-lg'
              rows={10}
              id='message'
              name='message'
              value={formData.message}
              placeholder='Do you have anything to say?'
              onChange={handleOnChange}
            />
            {formError.message && <span className='text-red-500 text-sm'>Enter message with minimum 100 characters!</span>}
          </div>
          <br />
          <button
            type='submit'
            className='text-white bg-blue-700 px-6 py-3 rounded-lg hover:bg-blue-500 disabled:bg-blue-300'
            disabled={Object.values(formError).some(error => error)}
          >
            {isLoading ? <BiLoader /> : "Send"}
          </button>
        </form>
      </div>
    </div>
  )
};

export default Contact