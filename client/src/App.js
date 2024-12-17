import "./App.css";
import Dashboard from "./component/Dashboard";
import Form from "./component/Form";
import Sidebar from "./miscellenious/SideBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/pro-form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
