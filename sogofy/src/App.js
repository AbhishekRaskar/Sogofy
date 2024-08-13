import React, { useContext } from 'react';
import './App.css';
import Counter from './Components/Counter';
// import Form from './Components/Form';
// import Timer from './Components/Timer';
import User from './Components/User';
import { ThemeContext } from './Context/ThemeContextProvider';

function App() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
      <Counter />
      
      <hr />
      <User />
      {/* <Form />
      <hr />
      <Timer /> */}
    </div>
  );
}

export default App;
