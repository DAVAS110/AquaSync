import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./screens/Home.jsx";
import Status from "./screens/Status.jsx";
import UsageInformation from "./screens/UsageInformation.jsx";
import Settings from "./screens/Settings.jsx";
import Message from "./screens/Message.jsx";

import SideBar from "./components/SideBar";

const App = () => {
  return (
    <div className="flex">
      <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/status" element={<Status />} />
          <Route path="/usageInformation" element={<UsageInformation />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
