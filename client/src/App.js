import './App.css';
import Header from './Header.js';
import Post from './Post.js';
import {Route, Routes} from "react-router-dom";
import Layout from './Layout';
import IndexPage from './Pages/IndexPage';
import LoginPage from './Pages/LoginPage';
import RegistrationPage from './Pages/RegistrationPage';

function App() {
  return(
    <Routes>
       <Route path="/" element={ <Layout /> }>
        <Route index element = { <IndexPage /> }/>
        <Route path="/login" element={ <LoginPage /> } />
        <Route path="/register" element={ <RegistrationPage /> } />
      </Route>
    </Routes>
  );
}

export default App;
