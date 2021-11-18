import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./FileResduce/Slice";
import { useForm } from "react-hook-form";
import { logins } from "./utils";
import axios from "axios";

export default function SignIn(props) {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
  });

  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
  //     console.log(response);
  //   });
  // }, []);

  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = "https://api.github.com/users/hacktivist123/repos";
  //   axios.get(apiUrl).then((repos) => {
  //     const allRepos = repos.data;
  //     setAppState({ loading: false, repos: allRepos });
  //   });
  // }, [setAppState]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setInfo({ ...info, [name]: value });
    setValue(name, value);
  };

  const onSubmit = () => {
    // e.preventDefault();
    // localStorage.setItem("Email", info?.email);
    // localStorage.setItem("Password", info?.password);
    // console.log(info);
    logins();
    // localStorage.setItem("login", true);
    props.history.push("/public");

    dispatch(
      login({
        email: info?.email,
        password: info?.password,
      })
    );
  };

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={info.email}
              onChange={handleInput}
              ref={register("email", { required: true })}
              autoFocus
            />
            {errors?.email?.type === "required" && <p>Email is required</p>}
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={info.password}
              onChange={handleInput}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to="/changepassword" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              {/* <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid>
          </Box>
        </Box>
        <Typography
          sx={{ mt: 5, mb: 4 }}
          variant="body2"
          color="text.secondary"
          align="center"
        >
          {"Copyright © "}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}
