import './App.css';
import Footer from './Footer';
import Header from './Header.js';
import Hero from './Hero.js';
import Home from './Home';
import Product from './Product';
import Shop from './Shop.js';
import SlideProducts from './SlideProducts';


function App() {
  return (
    //BEM
    <div className="App">
    <Header />
    <Hero />  
    <Shop />
    <Home />
    <SlideProducts />
    <Footer />

    </div>
  );
}

export default App;
