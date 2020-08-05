import React, { useState } from "react";
import { Container, Row, Dropdown, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
  const [date, setDate] = useState(new Date());

  const handleChange = (date: Date) => {
    setDate(date);
  };

  return (
    <Container className="panel-filter">
      <Row>
        <Col>
          <DatePicker selected={date} onChange={handleChange} />
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Daily
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Daily</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Weekly</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
  );
};

export default DateFilter;
