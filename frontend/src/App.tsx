import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import TagFilter from "./tagFilter";
import DateFilter from "./dateFilter";
import ContentList from "./contentList";
import TopScrollButton from "./topScrollButton";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <TagFilter />
        </Row>
        <Row>
          <DateFilter />
        </Row>
        <Row>
          <ContentList />
        </Row>
      </Container>
      <TopScrollButton />
    </div>
  );
}

export default App;
