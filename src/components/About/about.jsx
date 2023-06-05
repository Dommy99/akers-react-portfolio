import "./about.css";
import Philly from "../../img/portfolio-philly.jpg";
import { useEffect, useRef } from 'react';

const About = () => {

  const aboutRef = useRef(null);


  useEffect(() => {
    const aboutPos = aboutRef.current.offsetTop;
    const windowHeight = window.innerHeight;
    const scrollPos = aboutPos - windowHeight + aboutRef.current.offsetHeight;
    window.scrollTo({ top: scrollPos, behavior: 'smooth' });
}, []);


  return (
    <div className="about" ref={aboutRef}>
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
        <img src={Philly} alt="" className="about-img" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title"> A Little Bit About Me
        <div className="about-texts">
            <h4 className="about-title">Philadelphia, PA</h4>
          </div></h1>
        <p className="about-sub">
        Born and raised in Philadelphia I've been immersed in every culture you could think of. Sure we're the city of brotherly love but we're also the city of culinary wonders, rich architecture, and deep long history spanning back further than the country itself. I've had the chance to serve my country and travel the world but I'll always have one home.
        </p>
        <div className="about-philly">
          
        </div>
      </div>
    </div>
  );
};

export default About;