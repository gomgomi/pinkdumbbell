import React, { useState } from "react";
import { Accordion, Card, useAccordionToggle } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

enum Tags {
  All,
  FashionAndBeauty,
  FoodAndEating,
  Entertainment,
  VlogAndDaily,
  ASMR,
  Game,
  FetAndAnimal,
  ITAndTechnology,
  MovieAndAnime,
  Automobile,
  Music,
  Sport,
  Fun,
  NewsAndPolitical,
  Education,
  SocialAndReligion,
  Kids,
  Etc,
};

interface AccodionToggleButtonProps {
  children: any,
  eventKey: string,
  isExpanded: boolean,
  handleAccordionToggle: any
};

const AccodionToggleButton = (props: AccodionToggleButtonProps) => {
  const decoratedOnClick = useAccordionToggle(props.eventKey, props.handleAccordionToggle);

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
    {props.isExpanded ? <ChevronUp/> : <ChevronDown/>}
    </button>
  );
};

const TagFilter = () => {
  const [isExpanded, setExpanded] = useState(false);

  const toggledTagList = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Accordion>
      <Card>
        <Card.Header>
          Tags
          <AccodionToggleButton
            eventKey="0"
            isExpanded={isExpanded}
            handleAccordionToggle={toggledTagList}
            >
          </AccodionToggleButton>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Tags 2</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default TagFilter;
