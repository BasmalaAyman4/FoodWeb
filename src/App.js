
import './App.css';
import Navbar from './Component/Global/NavBar/Navbar'
import Footer from "./Component/Global/Footer/Footer"
import Router from './Router/Router';
function App() {

  return (
    <div className="App ">
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
