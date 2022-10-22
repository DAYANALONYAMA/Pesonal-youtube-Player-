import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
import moment from "moment/moment";

export default function SearchResul() {
  const { id } = useParams();
  const { accessToken } = useContext(ContentContext);
  const [videofind, setVideofind] = useState([]);
  const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${id}&key=${API}`,
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          setVideofind(data.items);
        }
      });
  }, [id]);
  console.log(videofind);

  return (
    <>
      <main className="card-main">
        {videofind.map((data, index) => {
          return (
            <Link to={`/VideosPlaying/${data.id.videoId}/`} className="link">
              <div key={index}>
                <img
                  src={data.snippet.thumbnails.medium.url}
                  alt=""
                  className="card-image"
                />
                <div className="video-details">
                  <h3>{data.snippet.title}</h3>
                  <div className="chanel-info">
                    <div className="chanel-info-details">
                      <div className="chanel-info-details-more"></div>
                      <h5>{moment(data.snippet.publishedAt).fromNow()}</h5>
                      <h4>{data.snippet.channelTitle}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </main>
    </>
  );
}
