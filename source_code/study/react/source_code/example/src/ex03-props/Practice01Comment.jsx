import React from "react";
import "./Practice01Comment.css";

function Practice01Comment(props) {
  return (
    <div className="comment">
      <div className="comment-author">{props.author}</div>
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">
        {new Date(props.regdate).toLocaleString()}
      </div>
    </div>
  );
}

export default Practice01Comment;
