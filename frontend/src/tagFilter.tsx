import React from "react";
import { Container, Row, ToggleButton } from "react-bootstrap"

const TagFilter = () => {
    return(
        <Container>
            <Row>   
                <ToggleButton
                    type="checkbox"
                    variant="primary"
                    value="1">
                        All
                </ToggleButton>
                <ToggleButton
                    type="checkbox"
                    variant="primary"
                    value="2">
                        Tag A
                </ToggleButton>
                <ToggleButton
                    type="checkbox"
                    variant="primary"
                    value="3">
                        Tag B
                </ToggleButton>
            </Row>
        </Container>
    );
}

export default TagFilter;