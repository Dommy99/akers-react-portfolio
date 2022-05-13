import "./about.css";
import Philly from "../../img/portfolio-philly.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
        <img src={Philly} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title"> A Little Bit About Me</h1>
        <p className="about-sub">
          Born and raised in Philadelphia I've been immerseded in every culture you could think of. Sure we're the city of brotherly love but we're also the city of culinary wonders, rich architecture, and deep long history spanning back further than the country itself. I've had to chance to serve my country and travel the world but I'll always have one home.
        </p>
        <div className="about-philly">
          <div className="about-texts">
            <h4 className="about-title">Philadelphia, PA</h4>
            <p className="about-desc">
              Center City
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;