import React, { useState } from 'react';
import axios from 'axios';

const Youtube = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allVideos, setAllVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await axios.get(
        'https://www.googleapis.com/youtube/v3/search',
        {
          params: {
            q: searchTerm,
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            part: 'snippet',
            maxResults: 10,
          },
        }
      );
      setAllVideos(data.data.items);
      setCurrentVideo(data.data.items[0]);
      console.log(data.data.items);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <nav>
        <input
          type="text"
          placeholder="Enter search item"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </nav>
      <main>
        <div className="current-video">
          {currentVideo ? (
            <div>
              <iframe
                width="420"
                height="315"
                src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
              ></iframe>
              <h2>{currentVideo.snippet.title}</h2>
              <p>{currentVideo.snippet.description}</p>
            </div>
          ) : (
            <h2>No video selected.</h2>
          )}
        </div>
        <div className="video-list">
          {allVideos.length > 0 ? (
            allVideos.map((video, idx) => {
              return (
                <div key={idx} onClick={() => setCurrentVideo(video)}>
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                    height={video.snippet.thumbnails.default.height}
                    width={video.snippet.thumbnails.default.width}
                  />
                  <h4>{video.snippet.title}</h4>
                  <p>{video.snippet.channelTitle}</p>
                </div>
              );
            })
          ) : (
            <h3>No videos available</h3>
          )}
        </div>
      </main>
    </>
  );
};

export default Youtube;
