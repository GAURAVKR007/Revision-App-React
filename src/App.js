import './App.css';
import Navbar from './components/navbar/Navbar';
import AppHeader from './components/appHeader/AppHeader';
import Hero from './components/Hero/Hero';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AppHeader />
      <Hero />
    </div>
  );
}

export default App;
