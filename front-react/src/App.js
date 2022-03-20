import './App.css';
import SearchBar from './Components/search'
import logo from './logo.svg'
import france from './france.png';
import indice from './indice.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>INDICE NATIONAL DE FRAGILITÉ NUMÉRIQUE
            <img src={indice} alt="indice" className='imageindice' />   </h3>
        </div>
        <img src={logo} alt="logo" />
        <p class="taille">L'indice de fragilité numérique, révèle les zones d'exclusion numérique sur un territoire donné.
          Cet outil permet, que vous soyez une commune, un département ou une région de comparer votre indice
          de fragilité numérique avec les autres territoires.</p>
        <div><h4>Trouver votre commune :</h4>
          <img src={france} alt="france" /></div>
        <SearchBar />
      </header>
    </div >
  );
}

export default App;
