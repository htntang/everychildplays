import './App.css';
import Header from './Header';

function App() {
  return(
    <main>
      <Header />

      <body>
      <div className="row">
      <div className="column">
        <img src="https://i.imgur.com/c0qpCEI.png" alt="pictures of complex needs children playing"></img>
      </div>
      <div className="column">
        <img src="https://i.imgur.com/ZYScK1W.png" alt="brand logo"></img>
        
      </div>
      </div>

      <div className="search-button">
      <button class="search">Find Playground</button>
      <button class="search">Playground Map</button>
      </div>
    </body>
    </main>
  )
}

export default App;
