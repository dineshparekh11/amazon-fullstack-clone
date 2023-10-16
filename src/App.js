import './App.css';
import Footer from './Footer';
import Header from './Header.js';
import Hero from './Hero.js';
import Product from './Product';
import Shop from './Shop.js';


function App() {
  return (
    //BEM
    <div className="App">
    <Header />
    <Hero />  
    <Shop />
    <Product />
    <Footer />
    </div>
  );
}

export default App;
