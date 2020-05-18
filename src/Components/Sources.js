import React from "react";

function Sources(props){
    const {id} = props;
    return <div data-testid={`Sources_${id}`}>Sources {id}</div>
}

export default Sources