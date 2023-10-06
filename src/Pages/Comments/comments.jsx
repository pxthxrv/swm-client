import React from 'react';
import { Link } from 'react-router-dom';

function Comments() {
  return (
    <div className='insight'>
      <h3>Comments</h3>
      <p>Tech stocks to rise in the near future due to...</p>
      <input type="textarea" placeholder='Leave a message...'></input>
    </div>
  );
}

function CommentsComponent() {
  <Link to="/Comment">{Comments}</Link>
}

export default Comments;