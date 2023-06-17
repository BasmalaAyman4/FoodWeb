
import './App.css';
import Navbar from './Component/Global/NavBar/Navbar'
import Router from './Router/Router';
import { createContext, useState } from 'react';
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark-mode" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App " id={theme}>

        <Navbar />
        <Router />


      </div>
    </ThemeContext.Provider>
  );
}

export default App;
