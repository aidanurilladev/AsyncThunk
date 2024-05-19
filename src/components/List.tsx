import { useEffect, useState } from "react";
import { deleteReq, editReq, getReq } from "../redux/features/TodoSlice";
import { useAppDispatch, useAppSelector } from "../redux/store";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

const List = () => {
  const { todo } = useAppSelector((state) => state);
  const [edit, setEdit] = useState<number | null>(null);
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");

  const oneProduct = (_id: number) => {
    const newData = {
      title,
      img,
    };
    dispatch(editReq({ _id, newData }));
    setEdit(null);
  };

  const edited = (data: TodoData) => {
    setTitle(data.title);
    setImg(data.img);
    setEdit(data._id!);
  };

  const dispatch = useAppDispatch();

  const deleteItem = (_id: number) => {
    dispatch(deleteReq(_id));
  };

  useEffect(() => {
    dispatch(getReq());
  }, [dispatch]);
  return (
    <div id="home">
      <div className="home">
        {todo.map((el, index) => (
          <div className="block">
            {edit === el._id ? (
              <div   className="edit_window">
              <div className="edit_block">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                />
                <input
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                  type="text"
                />
                <button
                  className="block_button"
                  onClick={() => oneProduct(el._id!)}
                >
                  save
                </button>
              </div>
                </div>
            ) : (
              <>
                <div key={index} className="list">
                  <div className="box">
                    <img src={el.img} alt="" />
                    <h1>{el.title}</h1>
                    <div className="btn_icon">
                      <button
                        className="icon"
                        onClick={() => {
                          edited(el);
                          setEdit(el._id!);
                        }}
                      >
                        <FiEdit />
                      </button>
                      <button
                        className="icon"
                        onClick={() => deleteItem(el._id)}
                      >
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
