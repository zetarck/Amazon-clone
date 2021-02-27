import './App.css';
import Header  from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    //BEM 
    <div className="app">
      {/* Render Header y Home */}
      <Header />
      <Home />
      <Footer />
    </div>
    
  );
}

export default App;
