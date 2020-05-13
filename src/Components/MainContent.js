import React from "react";

function MainContent(props){
    const {id} = props;

    return( <main data-testid={id}>{id}</main>);
}

export default MainContent