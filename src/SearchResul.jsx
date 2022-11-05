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
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${id}&key={import.meta.env.VITE_APP_KEY }`,
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
      {/* <div className="app-page-search"> */}
      <div className="contenair-videos">
        <div className="video-card">
          <div className="videos">
            {/* <main className="video-card">
            <div className="videos"> */}
            {videofind.map((data, index) => {
              return (
                <Link
                  className="Link"
                  to={`/VideosPlaying/${data.id.videoId}/`}
                >
                  <div key={index}>
                    <img
                      src={data.snippet.thumbnails.medium.url}
                      alt=""
                      className="card-image"
                    />
                    <div className="info-video">
                      <h3>{data.snippet.title}</h3>
                      <h5>{moment(data.snippet.publishedAt).fromNow()}</h5>
                      <h4>{data.snippet.channelTitle}</h4>
                      {/* <div className="likes">
                          <div className="like">
                            <AiOutlineLike />
                            <span>{data.statistics.likeCount} </span>
                          </div>
                          <div className="like">
                            <GrView />
                            <span>{data.statistics.viewCount} </span>
                          </div>
                        </div> */}
                    </div>
                  </div>
                </Link>
              );
            })}
            {/* </div>
          </main> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
