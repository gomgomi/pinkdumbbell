import React from "react";
import { Container, Row } from "react-bootstrap";
import TagFilter from "./filter-tag";
import DateFilter from "./filter-date";

interface FilterProps {
  date: Date;
  period: string;
  tag: string;
  onChangeDate: (date: Date) => void;
  onChangePeriod: (period: string) => void;
  onChangeTag: (tag: string) => void;
}

const Filter = (props: FilterProps) => {
  return (
    <Container>
      <Row>
        <TagFilter
          tag={props.tag}
          onChangeTag={props.onChangeTag}
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
