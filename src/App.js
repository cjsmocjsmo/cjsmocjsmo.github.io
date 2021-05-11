import React from 'react';
import './App.css';
import Jumbo from "./Jumbo"
import MediaCenter from './comps/MediaCenter'
import Ampnado from './comps/Ampnado'
import AlphaTree from "./comps/AlphaTree"
import About from "./comps/About"
import Tech from "./comps/TechUsed"

function App() {
  return (
    <div className="App">
      <Jumbo />
      <MediaCenter />
      <Ampnado />
      <AlphaTree />
      <About />
      <Tech />
    </div>
  );
}

export default App;
