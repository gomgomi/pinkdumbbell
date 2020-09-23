import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Filter from "./components/filter/filter";
import ContentList from "./contentList";
import TopScrollButton from "./topScrollButton";
import { Period, TagNames } from "./components/filter/filterTypes";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [period, setPeriod] = useState(Period[0]);
  const [tag, setTag] = useState(TagNames.main[0]);

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handlePeriodChange = (period: string) => {
    setPeriod(period);
  };

  const handleTagChange = (tag: string) => {
    setTag(tag);
  };

  return (
    <div>
      <Container>
        <Row>
          <Filter
            date={date}
            period={period}
            tag={tag}
            onChangeDate={handleDateChange}
            onChangePeriod={handlePeriodChange}
            onChangeTag={handleTagChange}
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
