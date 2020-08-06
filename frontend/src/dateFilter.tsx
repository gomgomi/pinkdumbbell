import React, { useState } from "react";
import { Container, Row, Dropdown, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Period = ["Daily", "Weekly"];

const DateFilter = () => {
  const [date, setDate] = useState(new Date());
  const [period, setPeriod] = useState(Period[0]);

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handlePeriodChange = (eventKey: any) => {   
    setPeriod(eventKey);
  };

  return (
    <Container className="panel-filter">
      <Row>
        <Col>
          <DatePicker selected={date} onChange={handleDateChange} />
        </Col>
        <Col>
          <Dropdown onSelect={handlePeriodChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {period}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Period.map((name) => (<Dropdown.Item eventKey={name}>{name}</Dropdown.Item>))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default DateFilter;
