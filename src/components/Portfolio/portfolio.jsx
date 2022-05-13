import "./portfolio.css";

const Portfolio = ({img,link}) => {
  return (
    <div className="portfolio">
      <div className="portfolio-header">
        
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="portfolio-img" />
      </a>
    </div>
  );
};

export default Portfolio;
