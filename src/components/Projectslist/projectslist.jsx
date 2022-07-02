import "./projectslist.css";
import Portfolio from "../Portfolio/portfolio";
import { projects } from "../../projects";

const Projectslist = () => {
  
  return (
    <div className="projectslist">
      <div className="projectslist-texts">
        <h1 className="projectslist-title">Projects</h1>
      </div>
      <div className="projectslist-list">
        {projects.map((item) => (
          <Portfolio key={item.id} img={item.img} link={item.link} githublink={item.githublink} />
        ))}
      </div>
    </div>
  );
};

export default Projectslist;
