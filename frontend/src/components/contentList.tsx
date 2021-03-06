import React, { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import usePageBottom from "./usePageBottom";

import axios from "axios";

const BASE_URL = "http://18.222.230.125:8081/";

interface ContentItemProps {
  thumbnails: string,
  title: string,
  viewCount: number
  date: string,

  index?: number,
  channelId?: string,
  channelThumbnails?: string,
  channelTitle?: string,
  dailyViewCount?: number,
  publishedAt?: string,
  videoId?: string,
};

const dateToString = (date: Date) => {
  let dateParam = date.getFullYear().toString();
  dateParam += "-";
  dateParam += date.getMonth().toString().padStart(2, "0");
  dateParam += "-";
  dateParam += date.getDate().toString().padStart(2, "0");

  return dateParam;
};

/**
 * ContentList에 표시되는 아이템 컴포넌트
 */
const ContentItem = (props: ContentItemProps) => {
  return (
    <Card className="content">
      <Card.Img variant="top" src={props.thumbnails} />
      <Card.Body>
        <Card.Text>{props.date}</Card.Text>
        <Card.Text>{props.title}</Card.Text>
        <Card.Text>{props.viewCount}</Card.Text>
      </Card.Body>
    </Card>
  );
};

/**
 * 서버로부터 획득한 컨텐츠 리스트를 표시하는 컴포넌트
 */

 interface ContentListProps {
  date: Date;
  period: string;
  category: number;
 }

const ContentList = (props: ContentListProps) => {
  const [contents, setContents] = useState<any[]>([]);
  const [page, setPage] = useState(1);

  const isPageBottom = usePageBottom();

  useEffect(() => {
    getContents();
  }, [props]);

  useEffect(() => {
    if (isPageBottom) {
      getMoreContents();
    }
  }, [isPageBottom]);

  const createContents = (data: ContentItemProps[]) => {
    const newContents: any[] = [];
    data.map((elem) => (
      newContents.push(
        <ContentItem
          key={elem.index}
          thumbnails={elem.thumbnails}
          date={dateToString(props.date)}
          title={elem.title}
          viewCount={elem.viewCount}
        />
      )
    ));

    return newContents;
  };

  /**
   * category, date, period 값이 변경되어 새로운 컨턴츠 목록을 요청.
   */
  const getContents = async () => {
    try {
      const response = await axios.get(
        "/contents",
        {
          baseURL: BASE_URL,
          params: {
            categoryId: props.category,
            page: 1,
            date: dateToString(props.date),
            period: props.period.toLowerCase()
          }
        }
      );

      // console.log(response);
      
      const newContents: any[] = [];

      const responseContents = createContents(response.data);
      if (responseContents.length > 0) {
        newContents.push(responseContents); 
      }

      setContents(newContents);
      setPage(1);

    } catch (error) {
      console.log(error);
    }
  };

  /**
   * 현재 검색조건으로 추가 컨텐츠를 요청.
   * 스크롤이 최하단에 도달할 경우 호출되는 callback function에서 사용.
   */
  const getMoreContents = async () => {
    try {
      const nextPage = page + 1;
      const response = await axios.get(
        "/contents",
        {
          baseURL: BASE_URL,
          params: {
            categoryId: props.category,
            page: nextPage,
            date: dateToString(props.date),
            period: props.period.toLowerCase()
          }
        }
      );

      // console.log(response);
      
      const responseContents = createContents(response.data);
      if (responseContents.length > 0) {
        const newContents = Object.assign([], contents);
        newContents.push(responseContents);

        setContents(newContents);
        setPage(nextPage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="content-list">
      {contents}
    </Container>
  );
};

export default ContentList;
