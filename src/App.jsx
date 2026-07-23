import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Gmail from "./pages/Gmail";
import Pipeline from "./pages/Pipeline";
import Files from "./pages/Files";
import Errors from "./pages/Errors";
import History from "./pages/History";
import Settings from "./pages/Settings";

import "./App.css";


function App(){

  return(

    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <main className="contenido">

          <Routes>

            <Route path="/" element={<Dashboard />} />

            <Route path="/gmail" element={<Gmail />} />

            <Route path="/pipeline" element={<Pipeline />} />

            <Route path="/files" element={<Files />} />

            <Route path="/errors" element={<Errors />} />

            <Route path="/history" element={<History />} />

            <Route path="/settings" element={<Settings />} />

          </Routes>

        </main>

      </div>

    </BrowserRouter>

  );

}

export default App;