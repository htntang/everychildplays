import './App.css';
import Header from './Header.js';
import Post from './Post.js';
import {Route, Routes} from "react-router-dom";
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';
import Navbar from './Pages/navbar';
import About from './Pages/About';
import Team from './Pages/Team';
import PlaygroundMap from './Pages/PlaygroundMap';
import SearchPlaygrounds from './Pages/SearchPlaygrounds';
import Books from './Pages/Books';
import Resources from './Pages/Resources';
import Contact from './Pages/Contact';

function App() {
  return(
    <>
    <Navbar />
    <div className="container"></div>
    <Routes>
       <Route path="/" element={ <Layout /> }>
        <Route index element = { <IndexPage /> }/>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegistrationPage/> } />
        <Route path="/about" element={ <About />} />
        <Route path="/team" element={ <Team /> } />
        <Route path="/map" element={ <PlaygroundMap /> } />
        <Route path="/search" element={ <SearchPlaygrounds /> } />
        <Route path="/books" element={ <Books /> } />
        <Route path="/resources" element={ <Resources /> } />
        <Route path="/contactus" element={ <Contact />} />
      </Route>
    </Routes>
  </>
  );
}

export default App;
