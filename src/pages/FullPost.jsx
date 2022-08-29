import React from "react";
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from '../axios';

import { Post } from '../components/Post';
import { Index } from '../components/AddComment';
import { CommentsBlock } from '../components/CommentsBlock';


export const FullPost = () => {
  //делаем запрос локально, так как в Redux хранить одну статью бессмысленно
  const [data, setData] = React.useState();
  // useState Возвращает значение с состоянием и функцию для его обновления.
  const [isLoading, setLoading] = React.useState(true);
  //Данный хук возвращает объект с параметрами URL в формате ключ: значение, с помощью деструктуризации вытаскиваем id
  const { id } = useParams();

  //при первом рендере необходимо сделать запрос
  React.useEffect(() => {
    //делаем запрос axios.get на (`/posts/${id}`) и когда приходит ответ then(res =>  сохраняем его на setData(res.data);
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.warn(err);
        alert('Ошибка при получении статьи');
      });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `${process.env.REACT_APP_API_URL}${data.imageUrl}` : ''}
        // imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost>
        <ReactMarkdown children={data.text} />
      
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Петя Петров",
              avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
            },
            text: "Это тестовый комментарий",
          },
          {
            user: {
              fullName: "Николай Жуков",
              avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
            },
            text: "Это тестовый комментарий №2", 
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
