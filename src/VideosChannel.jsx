import react, { useEffect, useState } from "react";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import { SideBar } from "./SideBar";

export function VideosChannel() {
  const { accessToken } = useContext(ContentContext);
  const [video, setVideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?type=video&key={import.meta.env.VITE_APP_KEY }&channelId=${id}&part=snippet&maxResults=20`,
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideo(data.items);
      });
  }, [accessToken]);
  console.log(video);
  return (
    <>
      <Searchbar />
      <div className="app-page">
        <SideBar />
        <div className="contenair-videos">
          <div className="video-card">
            <div className="videos">
              {video &&
                video.map((data, index) => {
                  return (
                    <Link
                      className="Link"
                      to={`/VideosPlaying/${data.id.videoId}`}
                    >
                      <div key={index}>
                        <img
                          src={data.snippet.thumbnails.medium.url}
                          alt=""
                          className="card-image"
                        />
                        <div className="info-video">
                          <h3>{data.snippet.title} </h3>
                          <h4>{data.snippet.channelTitle} </h4>
                          <h5>{data.snippet.publishedAt} </h5>
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
