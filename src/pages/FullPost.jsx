import React from "react";
import { useParams } from 'react-router-dom'

import { Post } from "../components/Post";
import { Index } from "../components/LeaveComment";
import { CommentsBlock } from "../components/CommentsBlock";
import axios from "../axios";
import ReactMarkdown from "react-markdown";

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data);
      setLoading(false);
    }).catch(err => {
      console.warn(err);
      alert('Ошибка получения статьи');
    })
  }, []);

  if (isLoading) {
    return (<Post isLoading={true} isFullPost />);
  }


  return (
    <>
      <Post
        _id={data._id}
        title={data.title}
        imageUrl={data.imageUrl}
        user={data.user}
        createdAt={data.createdAt}
        viewCount={data.viewCount}
        commentsCount={data.commentsCount}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text}/>
        <p>
          {data.text}
        </p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Вася Пупкин",
              avatarUrl: "https://mui.com/static/images/avatar/3.jpg",
            },
            text: "Это тестовый комментарий",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/5.jpg",
            },
            text: "Это тестовый комментарий",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
