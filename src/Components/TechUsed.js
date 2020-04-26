import React from "react";
import MicroFrontEnd from "./MicroFrontEnd"

function TechUsed(props){
    const {name} = props;
    return <MicroFrontEnd id={`tech_used_${name}`} />
}

export default TechUsed