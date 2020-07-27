import React from "react";
import { Container, Row, Dropdown, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = () => {
    const handleChange = () => {

    }

    return(
        <Container>
            <Row>
                <Col>
                    <DatePicker onChange={handleChange}/>
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
}

export default DateFilter;