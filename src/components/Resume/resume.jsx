import "./resume.css";
import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

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
      <div className="container">
        {values.map((v, idx) => (
          <a href="https://drive.google.com/file/d/1yM9R-HUe_0rKv1glUp8uNaDLz3PN7GL6/view?usp=sharing" target="_blank" rel="noreferrer" key={idx}>
            <Button id='btn' variant="outline-dark" size="lg" className="me-2 mb-2" onClick={() => handleShow(v)}>
              <h1>Resume</h1>
              {typeof v === 'string' && `below ${v.split('-')[0]}`}
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Resume;
