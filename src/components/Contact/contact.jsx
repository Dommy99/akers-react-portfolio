import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { useEffect } from 'react';

// https://www.emailjs.com/docs/examples/reactjs/
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_w4mez1o",
        "template_7aaby5b",
        form.current,
        "bzqpeRpIYIG8Jyly3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const contactRef = useRef(null);


  useEffect(() => {
    const contactPos = contactRef.current.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPos = contactPos - windowHeight + contactRef.current.offsetHeight;
    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
}, []);


  return (
    <div className="contact" ref={contactRef}>
      <div className="contact-background"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Contact Me</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              +1 (215) 375-8871
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              Dominiqued.akers@gmail.com
            </div>
          </div>
        </div>
        <div className="contact-right">
          {/* https://www.emailjs.com/docs/examples/reactjs/ */}
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thanks for contacting me"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
