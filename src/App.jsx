import Intro from "./components/Intro/intro";
import Header from "./components/Header/header"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from "./Pages/Portfolio/portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (

    <div>
      <Router>
      <Header/>
      <Intro/>
      <Routes>
      <Route 
                path="/Portfolio"
                element={<Portfolio />}
              />
      </Routes>
      
      </Router>
    </div>
  );
};

export default App;
