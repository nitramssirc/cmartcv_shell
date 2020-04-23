import React from 'react';
import ShellNavbar from './Components/ShellNavbar'
import Skills from './Components/Skills'
import Experience from './Components/Experience'
import PersonalProjects from './Components/PersonalProjects'

function App() {
  return (
    <div>
      <ShellNavbar/>    
      <div id="home" style={{height:"1000px"}}>spacer</div> 
      <Skills/>
      <Experience/>
      <PersonalProjects/>
    </div>
  );
}

export default App;
