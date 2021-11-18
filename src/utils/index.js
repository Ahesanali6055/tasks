const TOKEN_KEY = "Login";

export const logins = () => {
  localStorage.setItem(TOKEN_KEY, "true");
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isLogin = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }

  return false;
};
