import React from "react";

function Blogs(props){
    const {id} = props;
    return <div data-testid={`Blogs_${id}`}>Blogs {id}</div>
}

export default Blogs