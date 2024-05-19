import { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/store";
import { getReq, postReq } from "../redux/features/TodoSlice";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const notify = () => {
    toast(" выполните все поле!!!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleClick = () => {
    if (title !== "" && img !== "") {
      const newData = {
        title,
        img,
      };
      dispatch(postReq(newData));
      setImg("");
      setTitle("");
    } else {
      notify();
    }
  };

  useEffect(() => {
    dispatch(getReq());
  }, []);

  return (
    <div id="add">
      <div className="add">
        <div className="block">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="title"
          />
          <input
            value={img}
            onChange={(e) => setImg(e.target.value)}
            type="text"
            placeholder="image"
          />
          <button
            className="block_button"
            onClick={() => {
              handleClick();
              nav("/");
            }}
          >
            Add Todo
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Add;
