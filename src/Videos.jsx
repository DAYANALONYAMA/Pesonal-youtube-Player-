import react, { useEffect, useState } from "react";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";
import "./Videos.css";
import { Searchbar } from "./Searchbar";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";

// const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";

function Videos() {
  const { accessToken } = useContext(ContentContext);
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=40&myRating=like&key={import.meta.env.VITE_APP_KEY }`,
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
  console.log(videos);
  return (
    <>
      <Searchbar />
      <div className="app-page">
        <SideBar />

        <div className="contenair-videos">
          <div className="video-card">
            <div className="videos">
              {videos &&
                videos.map((data, index) => {
                  return (
                    <Link className="Link" to={`/VideosPlaying/${data.id}`}>
                      <div key={index}>
                        <img
                          src={data.snippet.thumbnails.medium.url}
                          alt=""
                          className="card-image"
                        />
                        <div className="info-video">
                          <h3>{data.snippet.title} </h3>
                          <h4>{data.snippet.channelTitle} </h4>
                          {/* <h5>{data.statistics.viewCount} </h5> */}
                          <h5>{data.snippet.publishedAt} </h5>
                          <div className="likes">
                            <div className="like">
                              <AiOutlineLike />
                              <span>{data.statistics.likeCount} </span>
                            </div>
                            <div className="like">
                              <GrView />
                              <span>{data.statistics.viewCount} </span>
                            </div>
                          </div>
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

export default Videos;
