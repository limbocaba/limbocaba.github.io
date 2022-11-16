import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
