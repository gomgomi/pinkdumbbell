import React, { useState } from "react";
import { Accordion, Card, useAccordionToggle, Container } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Categories } from "./filterTypes";

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

interface CategoryFilterProps {
  category: number;
  onChangeCategory: (category: number) => void;
}

/**
 * 카테고리 필터 목록을 표시하는 컴포넌트.
 */
const CategoryFilter = (props: CategoryFilterProps) => {
  const [isExpanded, setExpanded] = useState(false);

  const convertNameToId = (name: string) => {
    let result = Categories.main.find(e => e.name === name);
    if (result) {
      return result.id;
    } else {
      result = Categories.sub.find(e => e.name === name);
      return (result) ? result.id : -1;
    }
  };

  const changeCategory = (event: React.MouseEvent<HTMLElement>) => {
    const clickedName: string = event.currentTarget.textContent || "";
    if (clickedName) {
      const id = convertNameToId(clickedName);
      if (id > -1) {
        props.onChangeCategory(id);
      }
    }
  };

  const toggledCategory = () => {
    setExpanded(!isExpanded);
  };

  return (
    <Container className="panel-filter">
      <Accordion>
        <Card className="panel-filter">
          <Card.Header className="panel-filter">
            {Categories.main.map((elem) => (
              <button className={props.category === elem.id ? "filter-category on" : "filter-category"} onClick={changeCategory} key={elem.id}>{elem.name}</button>
            ))}
            <AccodionToggleButton
              eventKey="0"
              isExpanded={isExpanded}
              handleAccordionToggle={toggledCategory}
            ></AccodionToggleButton>
          </Card.Header>
          <Accordion.Collapse eventKey="0" className="panel-filter accordion-collapse">
            <Card.Body>
              {Categories.sub.map((elem) => (
                <button className={props.category === elem.id ? "filter-category on" : "filter-category"} onClick={changeCategory} key={elem.id}>{elem.name}</button>
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
};

export default CategoryFilter;
