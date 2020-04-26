import React from "react";
import MicroFrontEnd from "./MicroFrontEnd"

function Sources(props){
    const {name} = props;
    return <MicroFrontEnd id={`sources_${name}`} />
}

export default Sources