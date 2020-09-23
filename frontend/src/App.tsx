import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Filter from "./components/filter";
import ContentList from "./contentList";
import TopScrollButton from "./topScrollButton";
import { Period } from "./components/filterTypes";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [period, setPeriod] = useState(Period[0]);

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handlePeriodChange = (period: string) => {
    setPeriod(period);
  };

  return (
    <div>
      <Container>
        <Row>
          <Filter
            date={date}
            period={period}
            onChangeDate={handleDateChange}
            onChangePeriod={handlePeriodChange}
          />
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
