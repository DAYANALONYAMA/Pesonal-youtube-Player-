import "./styleCss/Videos.css";
import react, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import Like from "./Like";
// import { Mention, MentionsInput } from "react-mentions";

// import { useContext } from "react";
// import { ContentContext } from "./UseContex";

const Comments = () => {
  const { id } = useParams();
  const [input, setInput] = useState("");
  const [comments, setComments] = useState();
  const [addcomment, setAddcomment] = useState();
  const [newComment, setNewComment] = useState(true);
  // const [liked, setLiked] = useState(false);
  const getComments = () => {
    fetch("http://localhost:3002/api/stuff")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComments(data);
        console.log(data);
      });
  };
  const onsubmitComments = () => {
    axios
      .post("http://localhost:3002/comment/addcomment", {
        comment: input,
        video: id,
        // userId: id,
      })
      .then((res) => {
        setInput("");
        console.log(res);
      });
    console.log(input);
    setNewComment(!newComment);
  };
  const handChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    getComments();
  }, [newComment]);

  return (
    <div className="container-comments">
      <div className="input-comment">
        <input
          type="text"
          placeholder=""
          className=""
          value={input}
          onChange={handChange}
        />
        <button onClick={onsubmitComments}>Commenter</button>
      </div>
      <div className="comments">
        {comments &&
          comments.map((data, i) => {
            return <Like data={data} key={i} />;
          })}
        {addcomment &&
          addcomment.map((res) => {
            return <p>{res.comment} </p>;
          })}
      </div>
    </div>
  );
};
export default Comments;
