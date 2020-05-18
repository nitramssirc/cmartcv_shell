import React from "react";

function TechUsed(props){
    const {id} = props;
    return <div data-testid={`TechUsed_${id}`}>Tech Used {id}</div>
}

export default TechUsed