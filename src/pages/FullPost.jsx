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
  const { _id } = useParams();

  React.useEffect(() => {
    axios.get(`/posts/${_id}`).then(res => {
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
        imageUrl={`http://localhost:4444/${data.imageUrl}`}
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
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "дадаада афщы шаф тащфы щоафщ ытфы тща щфтшыащ тф ащфыт атщф ыщатш фыщ",
          },
          {
            user: {
              fullName: "Иван Иванов",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
