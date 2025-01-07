import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import Admin from "./pages/Admin";
import SuperAdmin from "./pages/SuperAdmin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/admin-panel/*" element={<Admin />} />
        <Route path="/superadmin-panel/*" element={<SuperAdmin />} />
      </Routes>
    </div>
  );
}

export default App;
