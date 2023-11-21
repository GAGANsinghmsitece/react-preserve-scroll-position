import React, { useEffect, useRef, useState } from 'react';
import styles from './FeedPage.module.scss';
import Post from '../../components/Post/Post';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';

const FeedPage = ({ isBack, setIsBack }) => {
  const [posts, setPosts] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate();
  const scrollRef = useRef();

  const handleScroll = () => {
    setScrollPosition(parseInt(window.scrollY));
  };

  const fetchCards = async () => {
    try {
      const response = await fetch(process.env.REACT_APP_API_URL);
      if (response.ok) {
        const data = await response.json();
        if (data) {
          setPosts(data);
        }
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  useEffect(() => {
    let previousState = localStorage.getItem("data");
    if (previousState && isBack) {
      let storedState = JSON.parse(previousState);
      let prevPosts = storedState?.posts;
      let prevscrollPosition = storedState?.scrollPosition;
      if (prevPosts && prevscrollPosition) {
        setPosts(prevPosts);
        setScrollPosition(prevscrollPosition);
        setTimeout(() => {
          window.scroll(0, prevscrollPosition);
        }, (10));
      }
      setIsBack(false);
    } else {
      fetchCards();
    }
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onCardClick = () => {
    let data = {
      "posts": posts,
      "scrollPosition": scrollPosition
    };
    localStorage.setItem("data", JSON.stringify(data));
    navigate("/detail");
  }

  return (

    <div className={styles.FeedPage} ref={scrollRef} data-testid="FeedPage" onScroll={handleScroll}>
      {posts === null ?
        <div className={styles.SpinnerContainer}><Spinner /></div> : posts.map((tx) =>
          <Post
            title={tx.title}
            subtitle={tx.caption}
            price={tx.price}
            onCardClick={onCardClick}
          />
        )}
    </div>

  );
}


FeedPage.defaultProps = {};

export default FeedPage;
