import react, { useEffect, useState } from "react";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
import { Link } from "react-router-dom";

const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";

export function Channel() {
  const { accessToken } = useContext(ContentContext);
  const [channel, setChannel] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${API}`,
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setChannel(data.items);
      });
  }, [accessToken]);
  console.log(channel);
  return (
    <>
      {channel &&
        channel.map((data, index) => {
          return (
            <div key={index}>
              <img src={data.snippet.thumbnails.default.url} alt="" />
              <div className="info-channel">
                <h4>{data.snippet.title} </h4>
                {/* <h3>{data.snippet.description} </h3> */}
              </div>
            </div>
          );
        })}
    </>
  );
}
