import React from 'react';
import ShellNavbar from './Components/ShellNavbar'
import CVSection from './Components/CVSection'


function App() {
  return (
    <div>
      <ShellNavbar/>    
      <CVSection name="Skills"/>
      <CVSection name="Experience"/>
      <CVSection name="PersonalProjects"/>
      <CVSection name="Education"/>
      <CVSection name="Print"/>
    </div>
  );
}

export default App;
