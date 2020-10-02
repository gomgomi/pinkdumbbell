import React from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import Filter from "./components/filter/filter";
import ContentList from "./contentList";
import TopScrollButton from "./topScrollButton";
import { Period, Categories } from "./components/filter/filterTypes";

const App = () => {
  const [date, setDate] = useState(new Date());
  const [period, setPeriod] = useState(Period[0]);
  const [category, setCategory] = useState(Categories.main[0].id);

  const handleDateChange = (date: Date) => {
    setDate(date);
  };

  const handlePeriodChange = (period: string) => {
    setPeriod(period);
  };

  const handleCategoryChange = (tag: number) => {
    setCategory(tag);
  };

  return (
    <div>
      <Container>
        <Row>
          <Filter
            date={date}
            period={period}
            category={category}
            onChangeDate={handleDateChange}
            onChangePeriod={handlePeriodChange}
            onChangeCategory={handleCategoryChange}
          />
        </Row>
        <Row>
          <ContentList
            date={date}
            period={period}
            category={category}
          />
        </Row>
      </Container>
      <TopScrollButton />
    </div>
  );
}

export default App;
