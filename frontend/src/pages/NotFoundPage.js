import React, { useState } from "react";
import '../NotFoundPage/NFStyle.css'

const NotFoundPage = () => {
  const [file, setFile] = useState(null);
  const media = [
    { type: "img", url: require("../asset/img.jpg") },
    { type: "video", url: require("../asset/vid.mp4") },
  ];

  return (

    <div className="container bg-black">
      <h1>Dokumentasi</h1>
      <div className="media-container">
        {media.map((mediaFile, index) => (
          <div className="media" key={index} onClick={() => setFile(mediaFile)}>
            {mediaFile.type === "img" ? (
              <img src={mediaFile.url} alt={`media-${index}`} />
            ) : (
              <video src={mediaFile.url} muted />
            )}
          </div>
        ))}
      </div>

      <div className="popup-media">
        <span>&times;</span>
        {file?.type === 'video' ? (
          <video src={file?.url} muted autoPlay controls/>
        ) : (
          <img src={file?.url} />
        )}
      </div>
    </div>
  );
};

export default NotFoundPage;
