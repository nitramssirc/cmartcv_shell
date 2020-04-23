import React from 'react';
import ShellNavbar from './Components/ShellNavbar'
import Skills from './Components/Skills'

function App() {
  return (
    <div>
      <ShellNavbar/>    
      <div id="home" style={{height:"500px"}}>spacer</div> 
      <Skills/>
    </div>
  );
}

export default App;
