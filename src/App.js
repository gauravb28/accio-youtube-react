import React from 'react';
import './App.css';
import Youtube from './components/Youtube';

function App() {
  // const [searchText, setSearchText] = useState('');
  // const [allVideos, setAllVideos] = useState([]);
  // const [currentVideo, setCurrentVideo] = useState(null);

  // const handleSearch = async () => {
  //   console.log(process.env.REACT_APP_YOUTUBE_API_KEY);
  //   try {
  //     const data = await axios.get(
  //       'https://www.googleapis.com/youtube/v3/search',
  //       {
  //         params: {
  //           q: searchText,
  //           key: process.env.REACT_APP_YOUTUBE_API_KEY,
  //           part: 'snippet',
  //           maxResults: '10',
  //         },
  //       }
  //     );
  //     setAllVideos(data.data.items);
  //     setCurrentVideo(data.data.items[0]);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    // <div className="App">
    //   <div className="nav">
    //     <input
    //       type="text"
    //       value={searchText}
    //       onChange={(e) => setSearchText(e.target.value)}
    //     />
    //     <button onClick={handleSearch}>Search</button>
    //   </div>
    //   <div>
    //     <div className="current-video">
    //       {currentVideo ? (
    //         <>
    //           <iframe
    //             src={`https://www.youtube.com/embed/${currentVideo.id.videoId}`}
    //           />
    //           <p>{currentVideo.snippet.description}</p>
    //         </>
    //       ) : (
    //         <h2>No video selected</h2>
    //       )}
    //     </div>
    //     <div className="video-list">
    //       {allVideos.length > 0 ? (
    //         allVideos.map((video, idx) => {
    //           return (
    //             <div key={idx} onClick={() => setCurrentVideo(video)}>
    //               <img
    //                 src={video.snippet.thumbnails.default.url}
    //                 alt=""
    //                 height={video.snippet.thumbnails.default.height}
    //                 width={video.snippet.thumbnails.default.width}
    //               />
    //               <h4>{video.snippet.title}</h4>
    //               <p>{video.snippet.channelTitle}</p>
    //             </div>
    //           );
    //         })
    //       ) : (
    //         <h3>No video to display</h3>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <Youtube />
  );
}

export default App;
