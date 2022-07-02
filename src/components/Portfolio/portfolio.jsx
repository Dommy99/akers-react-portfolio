import "./portfolio.css";
import github from '../../img/github-512.webp'

const Portfolio = ({img,link,githublink}) => {
  console.log(img)
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="portfolio-img" />
      </a>
      <a href={githublink} target="_blank" rel="noreferrer">
          <img src={github} className="my-2" style={{ width: "10%" }} alt="cover" />
          </a>
    </div>
  );
};

export default Portfolio;
