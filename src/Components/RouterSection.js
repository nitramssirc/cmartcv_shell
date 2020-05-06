import React from "react";
import { useParams } from "react-router-dom";

import MainContent from "./MainContent";
import TechUsed from "./TechUsed";
import Blogs from "./Blogs";
import Sources from "./Sources";

const RouterSection = () => {
    let { id } = useParams();

    return (
    <>
      <MainContent id={id} />
      <TechUsed name={id} />
      <Blogs />
      <Sources />
    </>
  );
};

export default RouterSection;
