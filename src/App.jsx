import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import ProductList from "./components/Projectslist/projectslist";
import Contact from "./components/Contact/contact";
import Header from "./components/Header/header"
import Resume from "./components/Resume/resume"
import Footer from "./components/Footer/footer"
import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



const App = () => {
  return(
    <div>
      <Router>
      <Header/>
      <Intro/>
      <Routes>
      <Route 
                path="/Portfolio"
                element={<ProductList />}
              />
      <Route 
                path="/About"
                element={<About />}
              />
      <Route 
                path="/Contact"
                element={<Contact />}
              />
      <Route 
                path="/Resume"
                element={<Resume />}
              />
      </Routes>
      
      </Router>
      <Footer/>
      </div>
  ) 
};

export default App;