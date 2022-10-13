import React from 'react';
import { CommentList } from '../CommentList/CommentList';
import { UserInfo } from '../UserInfo/UserInfo';
import { Post } from '../../react-app-env';
import './PostInfo.scss';

type Props = {
  post: Post,
};

export const PostInfo: React.FC<Props> = ({ post }) => {
  const {
    title,
    user,
    body,
    comments,
  } = post;

  return (
    <div className="PostInfo">
      <div className="PostInfo__header">
        <h3 className="PostInfo__title">
          {title}
        </h3>
        <p>
          {' Posted by  '}
          {user && <UserInfo user={user} />}
        </p>
      </div>
      <p className="PostInfo__body">
        {body}
      </p>
      <hr />
      {!comments.length
        ? <b data-cy="NoCommentsMessage">No comments yet</b>
        : <CommentList comments={comments} />
      }
    </div>
  );
};