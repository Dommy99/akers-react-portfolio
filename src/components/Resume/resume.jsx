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
        <h4>Fort Hood, TX </h4>
        <p>
          An energetic, results-driven individual with proven skills in web
          development using the latest technologies. Thorough understanding of
          continuous development models to contribute to the success of web
          development projects.
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
          Served 3 years as a light infantryman applying military skills and
          knowledge in home-station environments as well as overseas assignments
          and duties. Utilized individual infantryman skills to ensure mission
          readiness. Constructed and maintained various weapons. Maintained and
          serviced assigned vehicles with 100% accountability. Inspected and
          maintained over 1 million dollars in communication equipment assigned
          to the company. Cleaned and ensured storage of multi-million-dollar
          vehicles and assigned equipment. Upheld safety protocols in all
          performed tasks with no injuries or negative results. Lead a fire team
          through multiple training cycles. Tasked with training new soldiers in
          firearm safety, protocols, and proficiency.
        </p>
        <h5>
          Free Library of Philadelphia <br />Philadelphia, PA 1/2017 - 12/2017 <br />Kitchen
          Manager
        </h5>
        <p>
          Managed kitchen staff to ensure daily duties performed as well as any
          special work assigned. Maintained standards set for all prepared food,
          ensuring served at the right temperature. Handled complaints made by
          guests about food or service, using professional manner and solving
          problem expeditiously. Supervised kitchen inventory to make certain
          all needed products and produce stocked or ordered fresh daily.
          Guaranteed the kitchen and all related areas kept clean and sanitized
          at all times. Planned, delegated, organized and coordinated each
          kitchen staff member’s activities for the day. Taught and assisted
          with cooking classes.
        </p>
        <h5>Education </h5>
        <p>University of Texas - Austin Anticipated 06/2022 Coding Boot Camp</p>
      </div></Modal.Body>
      </Modal>
    </>
      </div>
    </div>
  );
};

export default Resume;
