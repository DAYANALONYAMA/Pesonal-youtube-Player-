import { useParams } from "react-router-dom";

function VideosPlaying() {
  const { id } = useParams();
  return (
    <div>
      <h1>video player</h1>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
export default VideosPlaying;
