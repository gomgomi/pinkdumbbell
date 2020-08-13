import React, { useEffect, useState } from "react";
import { Container, Row, Card } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";

interface ContentItemProps {
  thumbnail: string;
  date: string;
  title: string;
  hits: number;
};

/**
 * ContentList에 표시되는 아이템 컴포넌트
 */
// const ContentItem = (props: ContentItemProps) => {
const ContentItem = (props: ContentItemProps) => {
  return (
    <Card className="content">
      <Card.Img variant="top" src={props.thumbnail} />
      <Card.Body>
        <Card.Text>{props.date}</Card.Text>
        <Card.Text>{props.title}</Card.Text>
        <Card.Text>{props.hits}</Card.Text>
      </Card.Body>
    </Card>
  );
};

interface ContentListProps {}

/**
 * 서버로부터 획득한 컨텐츠 리스트를 표시하는 컴포넌트
 */
const ContentList = () => {
  const [contents, setContents] = useState<JSX.Element[]>([]);
  const [hasMoreContents, setHasMoreContents] = useState(true);

  const loadFunc = () => {
    const newContents  = Object.assign([], contents);
    const prevContentCount = newContents.length;

    let todayDate = new Date();
    let date = String(todayDate.getFullYear());
    date += "-";
    date += String(todayDate.getMonth() + 1).padStart(2, '0');
    date += "-";
    date += String(todayDate.getDate()).padStart(2, '0');

    for (let i = 0; i < 10; i++) {
      newContents.push(
        <ContentItem
          key={prevContentCount + i}
          thumbnail={require("./assets/test-content-thumbnail.jpg")}
          date={date}
          title="Test title"
          hits={prevContentCount + i}
        />
      );
    }

    setContents(newContents);
  };

  useEffect(() => {
    console.log("Called useEffect");
    console.log(contents);
  }, [contents]);

  return (
    <Container>
      {/* <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={hasMoreContents}
        loader={<div className="loader">Loading ...</div>}
        // useWindow={false}
        // getScrollParent={() => this.scrollParentRef}
      >
        {contents}
      </InfiniteScroll> */}
      <Row className="contents">{contents}</Row>
      <Row><button onClick={loadFunc}>Load more</button></Row>
    </Container>
  );
};

export default ContentList;
