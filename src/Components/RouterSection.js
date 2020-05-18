import React from "react";
import { useParams } from "react-router-dom";
import { Accordion, Card } from "react-bootstrap";

import MainContent from "./MainContent";
import TechUsed from "./TechUsed";
import Blogs from "./Blogs";
import Sources from "./Sources";

const RouterSection = () => {
  let { id } = useParams();

  if(!id) id="AboutMe";

  return (
    <>
      <MainContent id={id} />
      <Accordion defaultActiveKey="0">
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
              Tech Used
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <TechUsed id={id} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="2">
              Blog Posts
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <Blogs id={id} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
            <Accordion.Toggle as={Card.Header} variant="link" eventKey="3">
              Source
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <Sources id={id} />
            </Card.Body>
          </Accordion.Collapse> 
        </Card>
      </Accordion>
    </>
  );
};

export default RouterSection;
