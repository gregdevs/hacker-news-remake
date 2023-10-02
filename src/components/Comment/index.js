import styles from './Comment.module.css';
import moment from 'moment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const agoTime = (timestamp) => moment(timestamp).fromNow();

const Comment = ({ text, children, userName, timestamp, id }) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleDeepLink = () => {
    navigate(`/item/${id}`);
  };

  return (
    <div className={styles.commentContainer}>
      <div className={styles.commentHeader}>
        <span>{userName}</span>
        <span className={styles.pointer} onClick={handleDeepLink}>
          {agoTime(timestamp)}
        </span>

        <span className={styles.pointer} onClick={handleCollapse}>
          {!collapsed && <span>[–]</span>}
          {collapsed && <span>more</span>}
        </span>
      </div>
      {!collapsed && (
        <div>
          {text}
          {children &&
            children.map((item) => (
              <Comment
                text={item.text}
                children={item.children}
                timestamp={item.timestamp}
                userName={item.user.name}
                id={item.id}
                key={'comment' + item.id}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
