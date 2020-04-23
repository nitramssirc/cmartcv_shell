import React from 'react';
import ShellNavbar from './Components/ShellNavbar'
import Skills from './Components/Skills'
import Experience from './Components/Experience'

function App() {
  return (
    <div>
      <ShellNavbar/>    
      <div id="home" style={{height:"500px"}}>spacer</div> 
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
