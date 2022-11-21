import { useParams } from "react-router-dom";
import "./styleCss/Videos.css";

function VideosPlaying() {
  const { id } = useParams();
  return (
    <div>
      <h1>video player</h1>
      <div className="playVideos">
        <iframe
          width="600"
          height="400"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default VideosPlaying;
