import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <main role="main" className="bg-white h-full">
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
