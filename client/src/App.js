import { Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { Home } from "./components/home-page/Home";
import { Catalog } from "./components/catalog-page/Catalog";
import { Create } from "./components/create-page/Create";
import { Details } from "./components/details-page/Details";
import { Edit } from "./components/edit-page/Edit";
import { Login } from "./components/login-page/Login";
import { Register } from "./components/register-page/Register";
import { Logout } from "./components/logout/Logout";
import { Footer } from "./components/footer/Footer";
import RouteGards from "./util/RouteGards";
import AuthGards from "./util/AuthGards";


function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AuthGards><Login /></AuthGards>} />
        <Route path="/register" element={<AuthGards><Register /></AuthGards>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/create" element={<RouteGards><Create /></RouteGards>} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<RouteGards><Edit /></RouteGards>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
