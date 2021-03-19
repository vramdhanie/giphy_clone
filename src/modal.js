import React from "react";

const Modal = ({ url, width, height, rating, username, title }) => {
  return (
    <div className="modal">
      <div className="overlay">
        <div className="content">
          <div className="image">
            <img src={url} width={width} height={height} alt={title} />
          </div>
          <div className="details">
            {title}
            {rating}
            {username}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
