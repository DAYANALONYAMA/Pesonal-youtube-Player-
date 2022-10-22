import react, { useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
import { Link } from "react-router-dom";

const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";

export function Channel() {
  const { accessToken } = useContext(ContentContext);
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=15&mine=true&key=${API}`,
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.items);
        setChannel(data.items);
      });
  }, [accessToken]);
  console.log(channel);
  return (
    <>
      <div className="contenair-videos">
        <div className="video-card">
          <SideBar />
          {channel &&
            channel.map((data, index) => {
              return (
                <div key={index}>
                  <Link
                    to={`/VideosChannel/${data.snippet.resourceId.channelId}`}
                  >
                    <img src={data.snippet.thumbnails.default.url} alt="" />
                  </Link>
                  <div className="info-channel">
                    <h4>{data.snippet.title} </h4>
                    {/* <h3>{data.snippet.description} </h3> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
