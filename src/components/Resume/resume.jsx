import "./resume.css";
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button} from 'react-bootstrap';

const Resume = () => {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <div id="btn-container">
      
      <div className="container" >
      <>
      {values.map((v, idx) => (
        <Button id='btn' variant="outline-dark" size="lg" key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          <h1>Resume</h1>
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title><h1>Resume </h1></Modal.Title>
        </Modal.Header>
        <Modal.Body>
      <div className="resume">
        <h1>Dominique D. Akers </h1>
        <h4>Copperas Cove, TX </h4>
        <p>
        An energetic, results-driven individual with proven skills in software development/cyber security using the latest technologies.  A thorough understanding of continuous development models contributes to the success of web development projects, while the knowledge in cyber security helps to protect both user and company data. 
        </p>
        <br />
        <br />
        <div className="resume-container">
        <div className="left">
          <h6>
            Skills:
            <li>OOP</li>
            <li>Git </li>
            <li>GitHub </li>
            <li>Slack </li>
            <li>Figma </li>
            <li>Heroku </li>
            <li>MS 365 </li>
            <li>Google Suite </li>
            <li>Discord </li>
            <li>Insomnia </li>
            <li>My SQL Workbench </li>
            <li>Computer Science Fundamentals </li>
            <li>UI/UX </li>
            <li>TDD </li>
            <li>Customer Service </li>
            <li>Problem Solving</li>
          </h6>
        </div>
        <div className="right">
          <h6>
            Technologies:
            <li>Java</li>
            <li>JavaScript/ES6 </li>
            <li>HTML </li>
            <li>CSS </li>
            <li>JSON </li>
            <li>SASS </li>
            <li>GIT </li>
            <li>jQuery </li>
            <li>Bootstrap </li>
            <li>NodeJS </li>
            <li>Express </li>
            <li>Jest </li>
            <li>SQL </li>
            <li>NoSQL </li>
            <li>React </li>
          </h6>
        </div>
        </div>
        <h4>Employment History </h4>
        <h5>United States Army<br /> Fort Hood, TX 01/2019 - 03/2022 <br />Infantryman</h5>
        <p>
        Served 3 years as a light infantryman applying military skills and knowledge in US and overseas assignments and duties. 
<br/>•	Inspected and maintained over $1M in communication equipment and vehicles assigned to the company. 
<br/>•	Lead a fire team through 5 training cycles. 

        </p>
        <h5>Education </h5>
        <p>University of Texas - 	Full stack web development course (mern), React and computer science fundamentals.</p>
        <p>Interapt - 	Full stack course learning Java and SQL.</p>
        <p>Certifications - CompTIA Security +, Certified Network Defender (CND), Certified Ethical Hacker (CEH)</p>
      </div></Modal.Body>
      </Modal>
    </>
      </div>
    </div>
  );
};

export default Resume;
