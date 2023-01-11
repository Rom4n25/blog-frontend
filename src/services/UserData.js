import { encode } from "base-64";

const UserData = () => {
  const checkIfLogged = async () => {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/users/login",
      {
        method: "get",
      }
    );
    sessionStorage.setItem("auth", response.ok);
    return response;
  };

  async function logIn(username, password) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/users/login",
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
    await fetch("https://mikroblog.azurewebsites.net/users/logout", {
      method: "get",
      credentials: "include",
    });
    sessionStorage.removeItem("auth");
  }

  async function create(username, password) {
    await fetch("https://mikroblog.azurewebsites.net/users/add", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }

  async function getUserIdFromUsername(username) {
    let response = await fetch(
      "https://mikroblog.azurewebsites.net/users/username/" + username,
      {
        method: "get",
      }
    );

    return await response.json();
  }
  return { logIn, logOut, checkIfLogged, create, getUserIdFromUsername };
};

export default UserData;
