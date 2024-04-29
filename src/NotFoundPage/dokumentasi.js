import React from "react";
import './style.css'

const Dokumentasi = () => {
    const media = [
        { type: 'img', url: require('../asset/img.jpg') },
        { type: 'video', url: require('../asset/vid.mp4') }
    ];

    return (
        <div className="container" style={{marginBlock:'100px', textAlign:'center'}}>
            <h1>Dokumentasi</h1>
            <div className="media-container">
                {media.map((file, index) => (
                    <div className="media" key={index}>
                        {file.type === 'img' 
                        ? <img src={file.url}/> 
                        : <video src={file.url} muted />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dokumentasi;
