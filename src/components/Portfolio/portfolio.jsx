import "./portfolio.css";
import github from '../../img/github-512.webp'

const Portfolio = ({name,link,githublink}) => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        
      </div>
      <a href={link} target="_blank" rel="noreferrer">
       <p id="projectName">{name}</p>
      </a>
      <a href={githublink} target="_blank" rel="noreferrer">
          <img src={github} className="my-2" style={{ width: "10%" }} alt="cover" />
          </a>
    </div>
  );
};

export default Portfolio;
