import React from "react";
import { Container, Row } from "react-bootstrap";
import { Categories } from "./filterTypes";

interface CategoryFilterProps {
  category: number;
  onChangeCategory: (category: number) => void;
}

/**
 * 카테고리 필터 목록을 표시하는 컴포넌트.
 */
const CategoryFilter = (props: CategoryFilterProps) => {
  const convertNameToId = (name: string) => {
    let result = Categories.find(e => e.name === name);
    return result ? result.id : -1;
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

  return (
    <Container>
      <Row className="panel-filter">
        {Categories.map((elem) => (
          <button className={props.category === elem.id ? "filter-category on" : "filter-category"} onClick={changeCategory} key={elem.id}>{elem.name}</button>
        ))}
      </Row>
    </Container>
  );
};

export default CategoryFilter;
