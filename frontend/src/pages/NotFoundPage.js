import React, { useState, useEffect } from "react";
import "../NotFoundPage/NFStyle.css";

const NotFoundPage = () => {
  const [file, setFile] = useState(null);

  const media = [
    { type: "img", url: require("../asset/img.jpg") },
    { type: "video", url: require("../asset/vid.mp4") },
  ];

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains("popup-media")) {
      setFile(null);
    }
  };

  useEffect(() => {
    if (file) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [file]);

  return (
    <div className="container bg-black" style={{
      marginBlock:'120px',
      color: "white",
      textAlign:"center"
      }}>
      <h1 className="">Dokumentasi</h1>
      <div className="media-container mt-4">
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

      {file && (
        <div className="popup-media">
          {file.type === "video" ? (
            <video src={file.url} muted autoPlay controls loop preload="metadata" />
          ) : (
            <img src={file.url} alt="" />
          )}
        </div>
      )}
    </div>
  );
};

export default NotFoundPage;
