import Header from "./components/Header";
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
      setUsername(sessionStorage.getItem("username"));
    } else {
      setAuthentication(false);
      setUsername("");
    }
  }, []);

  if (authentication) {
    sessionStorage.setItem("username", username);
    return (
      <>
        <Header setAuthentication={setAuthentication} />
        <Main username={username} />
      </>
    );
  }
  return (
    <Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      setAuthentication={setAuthentication}
    />
  );
};
export default App;
