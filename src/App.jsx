import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import ProductList from "./components/Projectslist/projectslist";
import Contact from "./components/Contact/contact";
import "./index.css"


const App = () => {
  return(
    <div>
      <Intro/>
      <About />
      <ProductList />
      <Contact />
      </div>
  ) 
};

export default App;