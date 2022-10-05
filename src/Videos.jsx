import react, { useEffect, useState } from "react";
const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";
const channelId = "UCfESPIhHYMAAUkq3vmipacg";
const playVideos = "https://youtube.googleapis.com/youtube/v3/videos";
// let fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

export const Videos = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `${playVideos}?&key=${API}&partpart=snippet&chart=mostPopular&maxResults=20`
    )
      .then((data) => data.json())
      .then((res) => {
        setVideos(res.items);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  //     }) {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setAllvideos(data);
  //     });
  // };
  // useEffect(() => {
  //   getVideos();
  // }, []);
  // useEffect(() => {
  //   fetch(fetchurl)
  //     .then((response) => response.json())
  //     .then((resJson) => {
  //       const result = resJson.items.map((doc) => ({
  //         ...doc,
  //         Videolink: "https://www.youtube.com/embed" + doc.id.videoId,
  //       }));
  //       setAllvideos(result);
  //     });
  // }, []);

  return (
    <div className="contenair">
      <div className="header">
        <h1>TitusSlow</h1>

        <input type="text" className="barre-recherche" />
      </div>
      <div className="contenair-icons">
        <img src="/Vector (1).svg"></img>
        <img src="/Vector.svg"></img>
        <img src="/🦆 icon _Heart_.svg"></img>
        <img src="/🦆 icon _play_.svg"></img>
        <img src="/🦆 icon _History_.svg"></img>
      </div>
      <div className="contenair-main">
        {videos.map((video) => {
          return (
            <>
              <div id={video.id} onClick={() => playVideos(video.id)}>
                {/* <div
                  style={{
                    backgroundImage: `url(${video.snippet.thumbnails.hight.url})`,
                  }}
                ></div> */}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

/* <iframe
        width="560"
        src="https://www.youtube.com/embed/gyvAdrArqgs"
        allowFullScreen
      ></iframe> */
