
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Events from './pages/events';
import AnnualReport from './pages/annual';
import Teams from './pages/team';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';


function App() {
  // const [data, setData] = React.useState(null);

  // React.useEffect(() => {
  //   fetch("/api")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>{!data ? "Loading..." : data}</p>
    //   </header>
    // </div>
        <Router>
        <Navbar />
        <Routes>
        {/* <Switch> */}
          <Route exact path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/annual' element={<AnnualReport/>} />
          <Route path='/team' element={<Teams/>} />
          <Route path='/blogs' element={<Blogs/>} />
          <Route path='/sign-up' element={<SignUp/>} />
        {/* </Switch> */}
        </Routes>
      </Router>
  );
}

export default App;
