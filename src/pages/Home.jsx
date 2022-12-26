import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import { fetchPosts, fetchTags } from "../redux/slices/posts";
import { useState } from "react";

export const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.data);
  const { posts, tags, comments } = useSelector((state) => state.posts);

  const { name } = useParams();

  const isPostsLoading = posts.status === "loading";
  const isTagsLoading = tags.status === "loading";

  const [tab, setTab] = useState(1);

  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);

  const handleTabs = (e, val) => {
    setTab(val);
  };

  return (
    <>
      { name ? (
        <></>
      ) : (
        <Tabs
          style={{ marginBottom: 15 }}
          value={tab}
          onChange={handleTabs}
          aria-label="basic tabs example"
        >
          <Tab label="Новые" />
          <Tab label="Популярные" />
        </Tabs>
      )}
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading
            ? [...Array(5)]
            : name 
            ? [...posts.items].filter((item) => item.tags.indexOf(name) >= 0)
            : tab == 1
            ? [...posts.items].sort((a, b) => b.viewCount - a.viewCount)
            : posts.items
          ).map((obj, index) =>
            isPostsLoading ? (
              <Post key={index} isLoading={true} />
            ) : (
              <Post
                _id={obj._id}
                title={obj.title}
                imageUrl={obj.imageUrl}
                user={obj.user}
                createdAt={obj.createdAt}
                viewCount={obj.viewCount}
                commentsCount={3}
                tags={obj.tags}
                isEditable={userData?._id == obj.user?._id}
              />
            )
          )}
          ;
        </Grid>
        {name ? (
          <></>
        ) : (
          <Grid xs={4} item>
            <TagsBlock
              items={tags.items}
              isLoading={isTagsLoading}
              title="Популярные тэги"
            />
            <CommentsBlock
              title="Последние комментарии"
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
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};
