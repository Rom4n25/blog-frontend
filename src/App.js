import Header from "./components/header/Header";
import Main from "./components/Main";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

const App = () => {
  const [authentication, setAuthentication] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("auth") === "true") {
      setAuthentication(true);
      setUsername(sessionStorage.getItem("loggedUser"));
    } else {
      setAuthentication(false);
      setUsername("");
    }
  }, []);

  const loginProps = {
    username,
    setUsername,
    password,
    setPassword,
    setAuthentication,
  };

  if (authentication === true) {
    sessionStorage.setItem("loggedUser", username);
    return (
      <>
        <Header setAuthentication={setAuthentication} />
        <Main loggedUser={username} />
      </>
    );
  } else {
    return <Login {...loginProps} />;
  }
};
export default App;
