import "./projectslist.css";
import Portfolio from "../Portfolio/portfolio";
import { projects } from "../../projects";
import { useEffect, useRef } from 'react';

const Projectslist = () => {

  const myRef = useRef(null);

  useEffect(() => {
    myRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []); 

  return (
    <div className="projectslist">
      <div className="projectslist-texts">
        <h1 className="projectslist-title">Projects</h1>
      </div>
      <div className="projectslist-list">
        {projects.map((item) => (
          <Portfolio key={item.id} name={item.name} link={item.link} githublink={item.githublink} />
        ))}
      </div>
      <div ref={myRef} />
    </div>
  );
};

export default Projectslist;
