import axios from "axios";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { useParams } from "react-router-dom";

const Like = (props) => {
  const { id } = useParams();
  const [newLike, setNewLike] = useState();
  // const email = currentUser.getBasicProfile().cu;

  console.log(props.data);
  const getNewlike = () => {
    console.log("cliqué");
    axios({
      method: "put",
      url: "http://localhost:3002/comment/addlike",
      headers: {},
      data: {
        email: email,
        videoId: id,
        idComment: id,
      },
    }).then((res) => {
      setNewLike(res);
      console.log(res);
    });
    // setLike(!newLike);
  };
  // setLike(!newLike);
  // console.log(Like);
  // console.log(getNewlike);

  return (
    <div>
      <p>{props.data.comment}</p>
      <div onClick={getNewlike}>
        <AiOutlineLike />
      </div>
    </div>
  );
};
export default Like;
