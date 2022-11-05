import react, { useEffect, useState } from "react";
import { SideBar } from "./SideBar";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import "./Videos.css";

export function Channel() {
  const { accessToken } = useContext(ContentContext);
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=15&mine=true&key={process.env.REACT_APP_KEY}`,
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
      <Searchbar />
      <div className="app-page">
        <SideBar />

        <div className="contenair-videos">
          <div className="video-card">
            <div className="videos">
              {channel &&
                channel.map((data, index) => {
                  return (
                    <div key={index}>
                      <Link
                        to={`/VideosChannel/${data.snippet.resourceId.channelId}`}
                        className="lien"
                      >
                        <img
                          src={data.snippet.thumbnails.medium.url}
                          alt=""
                          className="card-image-channel"
                        />
                      </Link>
                      <div className="info-video">
                        <h4>{data.snippet.title} </h4>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
