import React, { useRef } from 'react';
import emailjs from "emailjs-com"
import "./contact.css";
import { IoIosSend } from "react-icons/io";





const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_f4ahjrj', form.current, '9ydQ78dHzmlnI1jc6')
      .then((result) => {
          alert('Message sent successfully');
      }, (error) => {
          alert(error.message)
      });
      e.target.reset()
  };



  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="image-class">
            <img src="https://images.pexels.com/photos/326504/pexels-photo-326504.jpeg?cs=srgb&dl=pexels-tranmautritam-326504.jpg&fm=jpg" />
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-5 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Form</h5>
            </div>

            <form ref={form} onSubmit={sendEmail}>
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input type="text" className="form=control" />
              </div>
              <div className="contact-form">
                <label className="form-label">E-mail</label>
                <input type="text" className="form=control" />
              </div>
              <div className="contact-form">
                <label className="form-label">Your Massage</label>
                <textarea
                  type="text"
                 
                  maxLength="500"
                  className="form=control"
                  rows="4"
                  
                />
              </div>

              <div className="button-submit"> 
              
              <p>
                Send <IoIosSend size={20}/>
              </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
