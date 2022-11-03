import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import CreateUser from "../components/CreateUser";
import User from "../components/User";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-account" element={<CreateUser />} />
        <Route path="/user/:username" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
