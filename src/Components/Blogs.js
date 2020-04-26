import React from "react";
import MicroFrontEnd from "./MicroFrontEnd"

function Blogs(props){
    const {name} = props;
    return <MicroFrontEnd id={`blogs_${name}`} />
}

export default Blogs