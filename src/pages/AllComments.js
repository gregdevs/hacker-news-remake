import Comment from '../components/Comment/index.js';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const getComments = async () => {
  return await axios({
    method: 'get',
    url: 'http://localhost:3001/yahoo',
  });
};

/**
 *
 * @param {object} data
 * @param {param} id
 * @returns This function returns either the entire comments object, or if viewing as a deeplink, return matching item
 */
const findComment = (data, id) => {
  if (!id) return data;
  return data.flatMap((item) => {
    // base case
    if (item.id === id) return item;
    // the top 3 parents are not a match, lets call the function on the items children
    if (item && item.children.length > 0) {
      return findComment(item.children, id);
    } else {
      return item.children;
    }
  });
};

const AllComments = () => {
  const { id } = useParams();
  const [allComments, setAllComments] = useState(null);
  /**
   * on initial render, lets fetch all comments
   */
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setAllComments(comments.data);
    };
    fetchComments();
  }, []);

  return (
    <div className="allComments">
      {allComments &&
        findComment(allComments, id).map((comment) => {
          const { timestamp, user, text, children, id } = comment;
          return (
            <Comment
              userName={user.name}
              timestamp={timestamp}
              text={text}
              children={children}
              id={id}
              key={'wrapper' + id}
            />
          );
        })}
    </div>
  );
};

export default AllComments;
