import { encode } from "base-64";

const userData = () => {
  async function logIn(username, password) {
    let response = await fetch("/users/all", {
      method: "get",
      credentials: "include",
      headers: {
        Authorization: "Basic " + encode(username + ":" + password),
      },
    });
    response = await response.json();
    console.log(response);
    return response;
  }

  return { logIn };
};

export default userData;
