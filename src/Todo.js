import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useHistory } from "react-router-dom";
import { SentimentSatisfiedOutlined } from "@material-ui/icons";
// import Button from "@mui/material/Button";

const Todo = () => {
  const { id } = useParams();
  let history = useHistory();

  const [todoData, setTodoData] = useState([]);
  const [search, setSearch] = useState();

  React.useEffect(() => {
    let newArr = [];
    const localItem = JSON.parse(localStorage.getItem("todoList"));
    if (localItem) {
      newArr = [...localItem];
    }
    // console.log(localItem);
    setTodoData(newArr);
  }, []);

  // useEffect(() => {
  //   apiData();
  // }, []);
  // const apiData = async () => {
  //   const res = await axios.get(
  //     "https://jsonplaceholder.typicode.com/comments"
  //   );
  //   Arr = res.data;
  //   // console.log(res.data.length);
  //   setTodoData(Arr);
  // };
  // console.log(Arr);

  const searchSubmit = (event) => {
    event.preventDefault();
    let newArr = [];
    const localItem = JSON.parse(localStorage.getItem("todoList"));
    newArr = [...localItem];
    // console.log(localItem);
    let searchArr = [];
    searchArr = newArr.filter((item) =>
      item.name.toLowerCase().includes(event.target.value)
    );
    // console.log(searchArr);
    setTodoData(searchArr);
  };

  const deleteUser = (id) => {
    let myTarget = id;
    console.log("deleted");
    let newArr = [];
    newArr = [...JSON.parse(localStorage.getItem("todoList"))];
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].index == myTarget) {
        newArr.splice(i, 1);
        // console.log("got it");
      }
    }
    let count = 0;
    newArr.map((item) => {
      item.index = count;
      count++;
    });
    localStorage.setItem("todoList", JSON.stringify(newArr));
    setTodoData(newArr);
  };

  // const deleteUser = (todos) => {
  //   Arr = todoData;
  //   console.log(Arr);
  //   const filteredItems = Arr.filter((value) => value.id !== todos);
  //   console.log(filteredItems);
  //   setTodoData(filteredItems);
  // };

  return (
    <div className="container">
      <div className="py-4">
        <h1>ToDo Table</h1>
        <nav className="navbar justify-content-between">
          <Link
            to="/user"
            className="btn btn-success mb-3 mt-3"
            style={{ color: "black" }}
          >
            <b>Add ID</b>
          </Link>

          <form class="form-inline" onSubmit={searchSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              value={search}
              placeholder="Search"
              aria-label="Search"
              onChange={searchSubmit}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              <b>Search</b>
            </button>
          </form>
        </nav>

        <table className="table border shadow ">
          <thead className="thead-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todoData.map((value, index) => {
              // console.log(value);
              return (
                <tr key={value?.index} id={value.index}>
                  <td>{+value?.index + 1}</td>
                  <td>{value?.name}</td>
                  <td>{value?.username}</td>
                  <td>{value?.email}</td>
                  <td>
                    <Link className="mr-3" to={`/user/view/${value.index}`}>
                      <RemoveRedEyeIcon
                        sx={{ fontSize: 28 }}
                        style={{ color: "black" }}
                      />
                    </Link>
                    <Link className="mr-3" to={`/user/edit/${value.index}`}>
                      <ModeEditIcon
                        sx={{ fontSize: 28 }}
                        style={{ color: "black" }}
                      />
                    </Link>
                    <button
                      className="dltbtn mr-1"
                      onClick={() => deleteUser(value.index)}
                    >
                      <DeleteIcon sx={{ fontSize: 28 }} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
