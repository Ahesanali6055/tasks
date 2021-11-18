import React, { useState } from "react";
// import { Link } from "react-router-dom";
import history from "../history";
import { useParams } from "react-router-dom";

const View = () => {
  const { id } = useParams();

  const intId = parseInt(id);

  const [info, setInfo] = useState({
    name: "",
    username: "",
    email: "",
  });

  React.useEffect(() => {
    const localItem = JSON.parse(localStorage.getItem("todoList"));
    const values = localItem;
    setInfo(localItem);
    const getItem = values.find(({ index }) => intId === index);
    setInfo(getItem);
  }, [id]);

  return (
    <div className="container py-4">
      <button className="btn btn-danger" onClick={() => history.back()}>
        Back
      </button>

      <h2 className="mt-3">User Id: {parseInt(id) + 1}</h2>

      <hr />
      <ul className="list-group w-50">
        <li>Name: {info.name}</li>
        <li>User Name: {info.username}</li>
        <li>Email: {info.email}</li>
      </ul>
    </div>
  );
};

export default View;
