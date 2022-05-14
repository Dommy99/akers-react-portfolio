import "./intro.css"
import Headshot from "../../img/dom-cutout.jpg"

const Intro = () => {
    return (
      <div className="intro-container ">
        <div className="left-container">
          <div className="left-wrapper">
            <h2 className="intro">Hello, My name is</h2>
            <h1 className="name">Dominique Akers</h1>
            <div className="title">
              <div className="title-wrapper">
                <div className="title-item">Web Developer</div>
                <div className="title-item">UI/UX Designer</div>
                <div className="title-item">Content Creator</div>
              </div>
            </div>
            <p className="desc">
              I design and develop services for customers of all sizes,
              specializing in creating stylish, modern websites, web services and
              online stores.
            </p>
          </div>
        </div>
        <div className="right-container">
          <div className="background"></div>
          <img src={Headshot} alt="" className="img" />
        </div>
      </div>
    );
  };
  
  export default Intro;
  