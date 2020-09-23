import React, { useState } from "react";
import { Accordion, Card, useAccordionToggle, Container } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { TagNames } from "./filterTypes";

interface AccodionToggleButtonProps {
  eventKey: string;
  isExpanded: boolean;
  handleAccordionToggle: any;
}

/**
 * eventKey에 해당하는 Accodian의 collapse 동작 버튼 반환 및 동작 처리.
 */
const AccodionToggleButton = (props: AccodionToggleButtonProps) => {
  const decoratedOnClick = useAccordionToggle(
    props.eventKey,
    props.handleAccordionToggle
  );

  return (
    <button
      className="button-collapse"
      type="button"
      onClick={decoratedOnClick}
    >
      {props.isExpanded ? <ChevronUp /> : <ChevronDown />}
    </button>
  );
};

interface TagFilterProps {
  tag: string;
  onChangeTag: (tag: string) => void;
}

/**
 * Tag 필터 목록을 표시하는 컴포넌트.
 */
const TagFilter = (props: TagFilterProps) => {
  const [isExpanded, setExpanded] = useState(false);

  const changeTag = (event: React.MouseEvent<HTMLElement>) => {
    const clickedTagName: string = event.currentTarget.textContent || "";
    if (clickedTagName) {
      props.onChangeTag(clickedTagName);
    }
  };

  const toggledTagList = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Container className="panel-filter">
      <Accordion>
        <Card className="panel-filter">
          <Card.Header className="panel-filter">
            {TagNames.main.map((name, index) => (
              <button className={props.tag === name ? "filter-tag on" : "filter-tag"} onClick={changeTag} key={index}>{name}</button>
            ))}
            <AccodionToggleButton
              eventKey="0"
              isExpanded={isExpanded}
              handleAccordionToggle={toggledTagList}
            ></AccodionToggleButton>
          </Card.Header>
          <Accordion.Collapse eventKey="0" className="panel-filter accordion-collapse">
            <Card.Body>
              {TagNames.sub.map((name, index) => (
                <button className={props.tag === name ? "filter-tag on" : "filter-tag"} onClick={changeTag} key={index}>{name}</button>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default TagFilter;
