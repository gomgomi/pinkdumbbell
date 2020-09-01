import React from "react";
import { Container, Row } from "react-bootstrap";
import TagFilter from "./filter-tag";
import DateFilter from "./filter-date";

const Filter = () => {
  return (
    <Container>
      <Row>
        <TagFilter />
      </Row>
      <Row>
        <DateFilter />
      </Row>
    </Container>
  );
};

export default Filter;
