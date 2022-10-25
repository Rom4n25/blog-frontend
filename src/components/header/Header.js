import StyledHeader from "../styles/Header";
import userData from "../../services/UserData";
import React, { useState } from "react";
import { useCookies } from "react-cookie";

const Header = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <StyledHeader>
      <div>
        <button onClick={() => removeCookie("accessToken")}>Log Out</button>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            userData().logIn(username, password);
          }}
        >
          <input
            type={"text"}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <input type={"submit"}></input>
        </form>
      </div>
    </StyledHeader>
  );
};
export default Header;
