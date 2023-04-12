import './App.css';
import Header from './Header.js';
import Post from './Post.js';
import {Route, Routes} from "react-router-dom";

function App() {
  return(
    <Routes>
      <Route index element={
    <main>
      <Header />
      <Post />


    </main>
      } />
    </Routes>
  );
}

export default App;
