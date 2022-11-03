import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Login from "./components/Login";
import { useEffect, useState } from "react";

const App = () => {
  const [authentication, setAuthentication] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("auth") === "true") {
      setAuthentication(true);
    } else {
      setAuthentication(false);
    }
  }, [setAuthentication]);

  if (authentication) {
    return (
      <>
        <Header setAuthentication={setAuthentication} />
        <Main />
      </>
    );
  }
  return <Login setAuthentication={setAuthentication} />;
};
export default App;
