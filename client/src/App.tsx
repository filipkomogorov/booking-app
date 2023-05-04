import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./context/UserContext";
import axios from "axios";
import AccountPage from "./pages/AccountPage";
import AddProeprty from "./pages/AddProeprty";
import Property from "./pages/Property";
import Buy from "./pages/Buy";
import ResultsPage from "./pages/ResultsPage";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  // TODO - add a toaster to success/error messages
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/add" element={<AddProeprty />} />
          <Route path="/buy/:id" element={<Property />} />
          <Route path="/rent/:id" element={<Property />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/rent" />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/contacts" />
          <Route path="/rent/property/:id/contact" />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
