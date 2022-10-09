import react, { useEffect, useState } from "react";
import axios from "axios";
import { ContentContext } from "./UseContex";
import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";

const API = "AIzaSyDwekjqZuYGZgLhG8hRc3rzv-e6oNxYpsk";
const channelId = "UCfESPIhHYMAAUkq3vmipacg";
const playVideos = "https://youtube.googleapis.com/youtube/v3/videos";
// let fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=20`;

// let accessToken =
//   "ya29.a0Aa4xrXOuQJKhSFLgoIKfx1JbkWeyWLakjfsY-o2kSGY…zgaCgYKATASARMSFQEjDvL96d1_zoLNhZw5aG9iPFA12g0165";

//

function Videos() {
  const { accessToken } = useContext(ContentContext);
  const [videos, setVideo] = useState([]);
  useEffect(() => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&myRating=like&key=${API}`,
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
    <di>
      <h1>Hello</h1>
      {videos &&
        videos.map((data, index) => {
          return (
            // <Link to={`/VideosPlaying/${data.id}`}>
            <div key={index}>
              <img
                src={data.snippet.thumbnails.medium.url}
                alt=""
                className="card-image"
              />
              <h3>{data.snippet.title} </h3>
              <h4>{data.snippet.channelTitle} </h4>
              <h5>{data.statistics.viewCount} </h5>
              <h5>{data.snippet.publishedAt} </h5>
            </div>
            //{" "}
            // </Link>
          );
        })}
    </di>
  );
}

// fetch(
//   "https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=32&key=AIzaSyAWhMB1MsRJRjw4FkGU2OfZfSlW9YzcTHU",
//   {
//     method: "GET",
//     headers: new Headers({ Authorization: `Bearer ${accessToken}` }),
//   }
// )
//   .then((res) => res.json())
//   .then((data) => {
//     setVideo(data);
//     setTitle(data.items[0].id);
//   });

// const Videos = () => {
//   let { videoId } = useParams();
//   const [videoInfo, setVideoInfo] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     setVideoInfo([]);
//     setIsLoading(true);

//     axios
//       .get(
//         `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${API}`
//       )
//       .then((response) => {
//         createVideoInfo(response.data["items"][0]);
//         setIsError(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setIsError(true);
//       });
//   }, [videoId]);

//   async function createVideoInfo(video) {
//     const snippet = video.snippet;
//     const stats = video.statistics;
//     const channelId = snippet.channelId;
//     const response = await axios.get(
//       `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2C%20statistics&id=${videoId}&key=${API}`
//     );
//     const channelImage = response.data.items[0].snippet.thumbnails.medium.url;
//     const subs = response.items[0].statistics.subscriberCount;
//     const publishedDate = new Date(snippet.publishedAt).toLocaleDateString(
//       "en-GB",
//       {
//         day: "numeric",
//         month: "short",
//         year: "numeric",
//       }
//     );
//     const title = snippet.title;
//     const description = snippet.description;
//     const channelTitle = snippet.channelTitle;
//     const viewCount = stats.viewCount;
//     const likeCount = stats.likeCount;
//     const dislikeCount = stats.dislikeCount;

//     setVideoInfo({
//       title,
//       description,
//       publishedDate,
//       channelTitle,
//       channelImage,
//       viewCount,
//       likeCount,
//       dislikeCount,
//       subs,
//     });
//     setIsLoading(false);
//   }
//   if (isError) {
//     return (
//       <Alert severity="error" className="loading">
//         No Results found!
//       </Alert>
//     );
//   }
//   return (
//     <div className="videoplayer">
//       <div className="videoplayer__videodetails">
//         <div className="videoplayer__video">
//           {/* {isLoading ? (
//             <CircularProgress className="loading" color="secondary" />
//           ) : ( */}
//           {/* <Video videoId={videoId} /> */}
//           {/* )} */}
//         </div>
//         <div className="videoplayer__videoinfo">
//           {!isLoading ? (
//             <VideoInfo
//               title={videoInfo.snippet}
//               description={videoInfo.description}
//               publishedDate={videoInfo.publishedDate}
//               channelTitle={videoInfo.channelTitle}
//               channelImage={videoInfo.channelImage}
//               viewCount={videoInfo.viewCount}
//               likeCount={videoInfo.likeCount}
//               dislikeCount={videoInfo.dislikeCount}
//               subs={videoInfo.subs}
//             />
//           ) : null}
//         </div>
//       </div>
//       <div className="videoplayer__suggested">
//         {/* <RecommendedVideos /> */}
//       </div>
//     </div>
//   );
// };

export default Videos;
