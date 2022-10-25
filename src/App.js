import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  if (cookies.accessToken) {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  } else {
    return (
      <div>
        <Navigate to="/login"></Navigate>
      </div>
    );
  }
};

export default App;
