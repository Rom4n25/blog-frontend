import { encode } from "base-64";

const userData = () => {
  async function checkIfLogged() {
    let response = await fetch("/users/login", {
      method: "get",
    });
    sessionStorage.setItem("auth", response.ok);
    return response;
  }

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
  return { logIn, logOut, checkIfLogged };
};

export default userData;
