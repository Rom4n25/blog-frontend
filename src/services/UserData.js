import { encode } from "base-64";

const UserData = () => {
  const checkIfLogged = async () => {
    let response = await fetch("/users/login", {
      method: "get",
    });
    sessionStorage.setItem("auth", response.ok);
    return response;
  };

  async function logIn(username, password) {
    let response = await fetch("/users/login", {
      method: "get",
      credentials: "include",
      headers: {
        Authorization: "Basic " + encode(username + ":" + password),
      },
    });
    sessionStorage.setItem("auth", response.ok);

    return response;
  }

  async function logOut() {
    await fetch("/users/logout", {
      method: "get",
      credentials: "include",
    });
    sessionStorage.removeItem("auth");
  }

  async function create(username, password) {
    await fetch("/users/add", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
  }
  return { logIn, logOut, checkIfLogged, create };
};

export default UserData;
