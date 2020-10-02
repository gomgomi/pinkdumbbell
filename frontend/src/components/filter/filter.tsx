import React from "react";
import { Container, Row } from "react-bootstrap";
import TagFilter from "./filter-category";
import DateFilter from "./filter-date";

interface FilterProps {
  date: Date;
  period: string;
  category: number;
  onChangeDate: (date: Date) => void;
  onChangePeriod: (period: string) => void;
  onChangeCategory: (category: number) => void;
}

const Filter = (props: FilterProps) => {
  return (
    <Container>
      <Row>
        <TagFilter
          category={props.category}
          onChangeCategory={props.onChangeCategory}
        />
      </Row>
      <Row>
        <DateFilter
          date={props.date}
          period={props.period}
          onChangeDate={props.onChangeDate}
          onChangePeriod={props.onChangePeriod}/>
      </Row>
    </Container>
  );
};

export default Filter;
