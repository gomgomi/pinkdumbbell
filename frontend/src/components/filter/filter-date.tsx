import React from "react";
import { Container, Row, Dropdown, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Period } from "./filterTypes";

interface DateFilterProps {
  date: Date;
  period: string;
  onChangeDate: (date: Date) => void;
  onChangePeriod: (period: string) => void;
};

const DateFilter = (props: DateFilterProps) => {
  const handlePeriodChange = (eventKey: any) => {   
    props.onChangePeriod(eventKey);
  };

  return (
    <Container className="panel-filter">
      <Row>
        <Col>
          <DatePicker className="datepicker" selected={props.date} onChange={props.onChangeDate} />
        </Col>
        <Col>
          <Dropdown onSelect={handlePeriodChange}>
            <Dropdown.Toggle variant="dropdown-toggle">
              {props.period}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Period.map((name, index) => (<Dropdown.Item key={index} eventKey={name}>{name}</Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default DateFilter;
