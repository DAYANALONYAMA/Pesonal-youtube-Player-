import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ContentContext } from "./UseContex";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";
import VideosPlaying from "./VideosPlaying";
import { Searchbar } from "./Searchbar";
import { AiOutlineLike } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import "./Videos.css";

export function Home() {
  const { accessToken } = useContext(ContentContext);
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=100&chart=mostPopular&regionCode=US&key={process.env.REACT_APP_KEY}`,
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
