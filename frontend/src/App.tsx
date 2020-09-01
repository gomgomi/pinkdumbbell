import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Filter from "./components/filter";
import ContentList from "./contentList";
import TopScrollButton from "./topScrollButton";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Filter/>
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
