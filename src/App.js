import './App.css';
import { Navbar } from './components/Navbar';
import { Slidebar } from './components/Slidebar';
import { Products } from './components/Products';
import { Footer } from './components/Footer';
import './styles/responsive.css'
function App() {
  return (
    <>
      <header className="App">
        <Navbar />
        <Slidebar />
        <Products />
        <Footer />
      </header>
    </>
  );
}

export default App;
