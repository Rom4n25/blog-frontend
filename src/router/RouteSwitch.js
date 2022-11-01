import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import CreateUser from "../components/CreateUser";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create-account" element={<CreateUser />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
