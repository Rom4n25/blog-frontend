import Header from "./components/Header";
import Main from "./components/Main";
import Login from "./pages/Login";
import { useEffect, useState } from "react";

const App = () => {
  const [authentication, setAuthentication] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("auth") === "true") {
      setAuthentication(true);
    } else {
      setAuthentication(false);
    }
  }, []);

  if (authentication) {
    return (
      <>
        <Header setAuthentication={setAuthentication} />
        <Main userId={userId} />
      </>
    );
  }
  return <Login setUserId={setUserId} setAuthentication={setAuthentication} />;
};
export default App;
