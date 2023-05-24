import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import AboutPage from "./Components/Pages/AboutPage";
import ContactPage from "./Components/Pages/ContactPage";
import NotFound from "./Components/Pages/NotFound";
import LayoutNavBar from "./Components/Layout/LayoutNavBar";
import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";
import Modal from "./Components/Layout/Modal";
function App() {
  return (
    <div id="App">
      <LayoutNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
