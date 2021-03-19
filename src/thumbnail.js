import { useState } from "react";
import Modal from "./modal";

const Thumbnail = ({ images, title, rating, username }) => {
  // todo: use srcset and sizes
  const { url, width, height } = images.preview_gif;
  const [show, setShow] = useState(false);

  return (
    <div className="thumbnail">
      <img
        src={url}
        alt={title}
        width={width}
        height={height}
        onClick={() => setShow((p) => !p)}
      />

      {show && (
        <Modal
          url={images.original.url}
          width={images.original.width}
          height={images.original.height}
          rating={rating}
          username={username}
        />
      )}
    </div>
  );
};

export default Thumbnail;
