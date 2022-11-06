import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import CreateUser from "../pages/CreateUser";
import User from "../pages/User";

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
