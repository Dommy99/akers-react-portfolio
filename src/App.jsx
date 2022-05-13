import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import ProductList from "./components/Projectslist/projectslist";


const App = () => {
  return(
    <div>
      <Intro/>
      <About />
      <ProductList />
      </div>
  ) 
};

export default App;