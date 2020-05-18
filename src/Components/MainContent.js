import React from "react";

function MainContent(props){
    const {id} = props;

    return( <main data-testid={`MainContent_${id}`}>{id}</main>);
}

export default MainContent