import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Edit = () => {
  const { id } = useParams();
  const intId = parseInt(id);
  const history = useHistory();

  const [info, setInfo] = useState({
    name: "",
    username: "",
    email: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    setInfo({ ...info, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = info;
    data.index = id;
    let newArr = [];
    newArr = [...JSON.parse(localStorage.getItem("todoList"))];
    newArr[id] = data;
    localStorage.setItem("todoList", JSON.stringify(newArr));
    // console.log(newArr);
    history.push("/todo");
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
              Edit Form
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
              <button type="submit" className="btn btn-success float-right">
                UpDate
              </button>
              <button
                className="btn btn-danger"
                onClick={() => history.goBack()}
              >
                Back
              </button>

              {/* <Button
                type="submit"
                style={{ backgroundColor: "green" }}
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                <AddIcon /> Update User
              </Button> */}
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default Edit;
