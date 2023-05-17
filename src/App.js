import './App.css';
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from './components/Presentation/Presentation';
import Portfolio from './components/Portfolio/Portfolio';
import Competences from './components/Competences/Competences';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      < Banner />
      < Presentation />
      < Portfolio />
      < Competences />
      < Footer />
    </div>
  );
}

export default App;
