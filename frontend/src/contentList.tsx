import React from "react";
import { Container, Row, Card } from "react-bootstrap";

interface ContentItemProps {
  thumbnail: string,
  date: any,
  title: string,
  hits: number,
}

/**
 * ContentList에 표시되는 아이템 컴포넌트
 */
// const ContentItem = (props: ContentItemProps) => {
const ContentItem = () => {
  return (
    <Card className="content">
      <Card.Img variant="top" src={require("./assets/test-content-thumbnail.jpg")}/>
      <Card.Body>
        <Card.Text>date</Card.Text>
        <Card.Text>title</Card.Text>
        <Card.Text>hits</Card.Text>
      </Card.Body>
    </Card>
  );
};

interface ContentListProps {

}

/**
 * 서버로부터 획득한 컨텐츠 리스트를 표시하는 컴포넌트
 */
const ContentList = () => {
  let contents = [];
  for (let i = 0; i < 32; i ++) {
    contents.push(<ContentItem key={i} />);
  }

  return (
    <Container>
      <Row>
        {contents}
      </Row>
    </Container>
  );
};

export default ContentList;
