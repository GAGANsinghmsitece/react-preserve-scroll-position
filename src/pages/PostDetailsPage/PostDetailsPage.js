import React, { useEffect } from 'react';
import styles from './PostDetailsPage.module.scss';
import Post from '../../components/Post/Post';
import { Heading } from '@chakra-ui/react';

const PostDetailsPage = ({ setIsBack }) => {
  useEffect(() => {
    setIsBack(true);
  }, []);
  return (
    <div className={styles.PostDetailsPage} data-testid="PostDetailsPage">
      <Heading size="md">Post Details</Heading>
      <Post />
    </div>
  );
}



PostDetailsPage.defaultProps = {};

export default PostDetailsPage;
