import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ContentContext } from "./UseContex";
import { Link } from "react-router-dom";
import { SideBar } from "./SideBar";
import VideosPlaying from "./VideosPlaying";
import { Searchbar } from "./Searchbar";

const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";
export function Home() {
  const { accessToken } = useContext(ContentContext);
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=10&chart=mostPopular&regionCode=US&key=${API}`,
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
      <div className="contenair-videos">
        <SideBar />
        <Searchbar />
        <div className="videos">
          {videos &&
            videos.map((data, index) => {
              return (
                <Link className="Link" to={`/VideosPlaying/${data.id}`}>
                  <div key={index}>
                    <img
                      src={data.snippet.thumbnails.default.url}
                      alt=""
                      className="card-image"
                    />
                    <div className="info-channel">
                      <h4>{data.snippet.title} </h4>
                      <h4>{data.snippet.channelTitle} </h4>
                      <h5>{data.snippet.publishedAt} </h5>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}
