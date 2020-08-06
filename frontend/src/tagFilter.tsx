import React, { useState } from "react";
import { Accordion, Card, useAccordionToggle, Container } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

const TagNames = {
  main: [
    "전체",
    "패션/뷰티",
    "푸드/먹방",
    "엔터테인먼트",
    "Vlog/일상",
    "여행",
    "ASMR",
    "게임",
    "펫/동물",
  ],
  sub: [
    "IT/과학기술",
    "영화/애니",
    "자동차",
    "음악",
    "스포츠",
    "FUN",
    "뉴스/정치",
    "교육",
    "사회/종교",
    "키즈",
    "기타",
  ],
};

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

/**
 * Tag 필터 목록을 표시하는 컴포넌트.
 */
const TagFilter = () => {
  const [isExpanded, setExpanded] = useState(false);
  const [selectedTag, setSelectedTag] = useState(TagNames.main[0]);

  const changeTag = (event: React.MouseEvent<HTMLElement>) => {
    const clickedTagName: string = event.currentTarget.textContent || "";
    if (selectedTag && selectedTag !== clickedTagName)
      setSelectedTag(clickedTagName);
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
              <button className={selectedTag === name ? "filter-tag on" : "filter-tag"} onClick={changeTag} key={index}>{name}</button>
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
                <button className={selectedTag === name ? "filter-tag on" : "filter-tag"} onClick={changeTag} key={index}>{name}</button>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default TagFilter;
