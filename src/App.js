import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Contacts from "./pages/Contacts";
import Settings from "./pages/Settings";

const App = () => {
  const disableImageContextMenu = () => {
    const allImages = document.querySelectorAll("img");
    allImages.forEach((el) => {
      el.addEventListener("contextmenu", (e) => e.preventDefault());
    });
  };

  useEffect(() => {
    disableImageContextMenu();
  }, []);

  return (
    <main role="main" className="bg-white h-full no-select">
      <BrowserRouter>
        <Routes path="/">
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
