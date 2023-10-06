import React from "react";
import { Link } from "react-router-dom";

function Comments() {
	return (
		<div className="insight">
			<h3>Tech stocks to rise in near future</h3>
			<p>Tech stocks to rise in the near future due to...</p>
			<input type="textarea" placeholder="Leave a message..."></input>
		</div>
	);
}

function CommentsComponent() {
	return (
    <div>
      <Comments />
    </div>
  );
}

export default CommentsComponent;
