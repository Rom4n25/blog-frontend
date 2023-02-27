import { encode } from "base-64";

const UserData = () => {
  const checkIfLogged = async () => {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/users/login",
      {
        method: "get",
        credentials: "include",
      }
    );
    sessionStorage.setItem("auth", response.ok);
    return response;
  };

  async function logIn(username, password) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/users/login",
      {
        method: "post",

        credentials: "include",
        headers: {
          Authorization: "Basic " + encode(username + ":" + password),
        },
      }
    );
    sessionStorage.setItem("auth", response.ok);

    return response;
  }

  async function logOut() {
    await fetch(process.env.REACT_APP_API_ENDPOINT + "/users/logout", {
      method: "get",
      credentials: "include",
    });
    sessionStorage.removeItem("auth");
  }

  async function create(username, password) {
    await fetch(process.env.REACT_APP_API_ENDPOINT + "/users/add", {
      method: "post",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }

  async function getUserIdFromUsername(username) {
    let response = await fetch(
      process.env.REACT_APP_API_ENDPOINT + "/users/username/" + username,
      {
        method: "get",
        credentials: "include",
      }
    );

    return await response.json();
  }
  return { logIn, logOut, checkIfLogged, create, getUserIdFromUsername };
};

export default UserData;
