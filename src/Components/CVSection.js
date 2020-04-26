import React from "react";
import MicroFrontEnd from "./MicroFrontEnd";
import TechUsed from "./TechUsed";
import Sources from "./Sources";
import Blogs from "./Blogs";

function CVSection(props) {
  const {name} = props;

  return (
    <div id={name} style={{height:"800px", paddingTop:"100px"}}>
      <MicroFrontEnd id={name} />
      <TechUsed name={name}/>
      <Sources name={name}/>
      <Blogs name={name}/>
    </div>
  );
}

export default CVSection;
