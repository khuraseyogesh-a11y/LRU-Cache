import "./App.css";
import Products from "./Products.js";

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Layout from "./Layout.js";
import Dashboard from "./Dashboard.js";
import Cache from "./Cache.js";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Parent Route */}
        <Route path="/" element={<Layout />}>

          {/* Child Routes */}
          <Route index path="Dashboard" element={<Dashboard />} />

          <Route path="Cache" element={<Cache />} />
          <Route path="Products" element={<Products />} />

        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;