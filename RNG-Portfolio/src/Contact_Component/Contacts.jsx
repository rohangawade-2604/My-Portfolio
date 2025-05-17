import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Contact = () => {

  const formPart = useRef();

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_k5rmvou',   // Replace this
      'template_crbg4ix',  // Replace this
      formPart.current,
      '61DbcABcbaelDfwdo'    // Replace this
    )
      .then((result) => {
        console.log('Email sent', result.text);
        alert('Message sent Successfully');
        formPart.current.reset();
      })
      .catch((error) => {
        console.log("Error", error.text);
        alert("Failed to Send Message. Try again...!");
      });
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: 'ease-out-cubic', // Animation easing
      once: true, // Whether animation should happen only once
      disable: false // Disable AOS on mobile devices
    });
  }, []);



  return (
    <>
      <div className="Contact-Parent bg-black text-white h-[100vh] w-[100%] relative ">
        <h1 className='text-[110px] font-bold opacity-15 absolute left-130 '>CONTACT</h1>
        <h1 className='text-[60px] font-bold text-center pt-10' data-aos="fade-up">GET IN <span className='text-amber-400'>TOUCH</span> </h1>

        <div className='flexibility flex justify-between mx-50 my-15'>

          <div className="contact-details " data-aos="fade-up">

            <div className="bio">
              <h1 className='text-[26px] font-bold '>DON'T BE SHY...!</h1>
              <p className='text-[15px] w-90 mt-3 font-semibold'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            </div>

            <div className='Address-Point mt-5 flex '>
              <div><i className="fa-solid fa-map" style={{ color: "#FFD43B", fontSize: "30px" }}></i></div>
              <div className="ml-6">
                <h1 className='opacity-70'>ADDRESS POINT</h1>
                <p className='font-semibold'>Kandivali (East), Mumbai-400101 , Maharashtra</p>
              </div>
            </div>

            <div className='Mail-me mt-5 flex '>
              <div><i className="fa-solid fa-envelope-open" style={{ color: "#FFD43B", fontSize: "30px" }}></i></div>
              <div className="ml-7">
                <h1 className='opacity-70'>MAIL ME</h1>
                <p className='font-semibold'>rohangawade2604@gmail.com</p>
              </div>
            </div>

            <div className='call-me mt-5 flex mb-10'>
              <div><i className="fa-solid fa-square-phone" style={{ color: "#FFD43B", fontSize: "30px" }}></i></div>
              <div className="ml-7">
                <h1 className='opacity-70'>CALL ME</h1>
                <p className='font-semibold'>+91-9769637063</p>
              </div>
            </div>

            <button className=' p-[3px] cursor-pointer ml-3'>
              <Link to="https://www.linkedin.com/in/rohan-gawade-112a942a7/">
                <i className="fa-brands fa-linkedin" style={{ color: "#FFD43B", fontSize: "30px" }}></i>
              </Link>
            </button>

            <button className=' p-[3px] ml-3 cursor-pointer'>
              <Link to="https://github.com/rohangawade-2604">
              <i className="fa-brands fa-github" style={{ color: "#FFD43B", fontSize: "30px" }}></i>
              </Link> 
            </button>

            <button className=' p-[3px] ml-3 rounded-[5px]  cursor-pointer'><i className="fa-brands fa-facebook" style={{ color: "#FFD43B", fontSize: "30px" }}></i>
            </button>

            <button className=' p-[3px] ml-3 rounded-[5px] cursor-pointer'>
              <Link to="https://www.instagram.com/alpha_ronnie_26/"> 
              <i className="fa-brands fa-instagram" style={{ color: "#FFD43B", fontSize: "30px" }}></i></Link>  
            </button>
          </div>

          {/*----- 2nd div for contact page------ */}

          <div className="Contact-form ml-50 text-center" data-aos="fade-up" data-aos-duration="3000">
            <form ref={formPart} onSubmit={SendEmail}>
              <input type="text" name='from_name' placeholder='YOUR NAME' className='bg-gray-950 border-2 border-transparent hover:border-amber-400 p-3 w-70 rounded-2xl' required />

              <input type="text" name='from_email' placeholder='YOUR EMAIL' className='bg-gray-950  border-2 border-transparent hover:border-amber-400 ml-5 p-3 w-70 rounded-2xl' required />

              <input type="text" name='from_subject' placeholder='YOUR SUBJECT' className='bg-gray-950  border-2 border-transparent hover:border-amber-400 p-3 mt-5 w-145 rounded-2xl' required />

              <textarea name="message" id="" placeholder='YOUR MESSAGE' className='bg-gray-950 border-2 border-transparent hover:border-amber-400 p-3 mt-5 w-145 h-49 rounded-2xl' required></textarea>

              <button type='submit' className="relative group border-2 mr-[65%] border-amber-300 text-white rounded-3xl p-4 mt-6 cursor-pointer bg-transparent overflow-hidden transition-colors duration-300 ease-in-out 
              before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-amber-300 before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-in-out before:content-[''] hover:before:scale-x-100">

                <span className="relative z-10 group-hover:text-black transition-colors duration-300 font-bold">
                  SEND MESSAGES <i className="fa-solid fa-arrow-right-long ml-2"></i>
                </span>

              </button>

            </form>

          </div>

        </div>
      </div>
    </>
  )
}

export default Contact;

