import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";

const Add = () => {
  const [todoData, setTodoData] = useState("");
  const [info, setInfo] = useState({
    name: "",
    username: "",
    email: "",
  });

  console.log(`info`, info);

  let history = useHistory();

  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setInfo({ ...info, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newArr = [];
    const localItem = JSON.parse(localStorage.getItem("todoList"));
    if (!!localItem) {
      newArr = [...localItem];
    }
    newArr.push(info);
    let count = 0;
    newArr.map((item) => {
      item.index = count;
      count++;
    });
    // console.log(localItem);
    localStorage.setItem("todoList", JSON.stringify(newArr));
    history.push("/todo");
  };

  const addItem = () => {
    // console.log("additem");
    if (!todoData) {
    } else {
      setInfo([...info]);
      setTodoData("");
    }
  };

  const theme = createTheme();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            xl={{
              marginTop: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography className="mt-4" component="h1" variant="h4">
              Register Form
            </Typography>
            <Box component="form" noValidate xl={{ mt: 2 }} onSubmit={onSubmit}>
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="current-name"
                value={info.name}
                onChange={handleInput}
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="username"
                label="UserName"
                name="username"
                autoComplete="current-name"
                value={info.username}
                onChange={handleInput}
              />
              <TextField
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="current-email"
                value={info.email}
                onChange={handleInput}
              />
              <Button
                type="submit"
                onClick={addItem}
                style={{ backgroundColor: "green" }}
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                <AddIcon /> User Add
              </Button>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Add;
