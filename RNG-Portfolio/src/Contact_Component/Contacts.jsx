import React from 'react'

const Contact = () => {
  return (
    <>
      <div className="Contact-Parent bg-black text-white h-[100vh] w-[100%] relative ">
        <h1 className='text-[110px] font-bold opacity-15 absolute left-130 '>CONTACT</h1>
        <h1 className='text-[60px] font-bold text-center pt-10'>GET IN <span className='text-amber-400'>TOUCH</span> </h1>

        <div className='flexibility flex justify-around mx-40 my-15'>

            <div className="contact-details ">

              <div className="bio">
                <h1 className='text-[26px] font-bold '>DON'T BE SHY...!</h1>
                <p className='text-[15px] w-90 mt-3 font-semibold'>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
              </div>

              <div className='Address-Point mt-5 flex '>
                <div><i className="fa-solid fa-map" style={{color: "#FFD43B" , fontSize: "30px"}}></i></div>
                <div className="ml-6">
                  <h1 className='opacity-70'>ADDRESS POINT</h1>
                  <p className='font-semibold'>Kandivali (East), Mumbai-400101 , Maharashtra</p>
                </div>
              </div>

              <div className='Mail-me mt-5 flex '>
                <div><i className="fa-solid fa-envelope-open" style={{color: "#FFD43B" , fontSize: "30px"}}></i></div>
                <div className="ml-7">
                  <h1 className='opacity-70'>MAIL ME</h1>
                  <p className='font-semibold'>rohangawade2604@gmail.com</p>
                </div> 
              </div>

              <div className='call-me mt-5 flex mb-10'>
                <div><i class="fa-solid fa-square-phone" style={{color: "#FFD43B" , fontSize: "30px"}}></i></div>
                <div className="ml-7">
                  <h1 className='opacity-70'>CALL ME</h1>
                  <p className='font-semibold'>+91-9769637063</p>
                </div>
              </div>

              <button className=' p-[3px] cursor-pointer ml-3'><i class="fa-brands fa-linkedin" style={{color: "#FFD43B", fontSize: "30px"}}></i></button>

              <button className=' p-[3px] ml-3 cursor-pointer'><i class="fa-brands fa-github" style={{color: "#FFD43B", fontSize: "30px"}}></i>
              </button>

              <button className=' p-[3px] ml-3 rounded-[5px]  cursor-pointer'><i class="fa-brands fa-facebook" style={{color: "#FFD43B", fontSize: "30px"}}></i>
              </button>

              <button className=' p-[3px] ml-3 rounded-[5px] cursor-pointer'><i class="fa-brands fa-instagram" style={{color: "#FFD43B", fontSize: "30px"}}></i>
              </button>
            </div>

          {/*----- 2nd div for contact page------ */}

        <div className="Contact-form">
          <form action="">
            <input type="text" name='text' placeholder='Your name' /> <input type="text" name='text' placeholder='Your Email' />

            <input type="text" name='text' placeholder='Your Subject' />
            <textarea name="" id="" placeholder='your message'></textarea>

            <button>send message</button>
          </form>
        </div>

        </div>
      </div>
    </>
  )
}

export default Contact
