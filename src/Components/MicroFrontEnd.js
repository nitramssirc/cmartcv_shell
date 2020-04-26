import React from "react";

function MicroFrontEnd(props){
    const {id} = props;

    return <div id={id} style={{height:"1000px", paddingTop:"100px"}}>
        {id}
    </div>
}

export default MicroFrontEnd