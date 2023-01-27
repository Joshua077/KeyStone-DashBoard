import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashBoard from "./Components/DashBoard/DashBoard";
import Layout from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<DashBoard />} />
          <Route path="blog" element={<DashBoard />} />
          <Route path="products" element={<DashBoard />} />
          <Route path="transaction" element={<DashBoard />} />
          <Route path="users" element={<DashBoard />} />
          <Route path="analysis" element={<DashBoard />} />
          <Route path="reports" element={<DashBoard />} />
          <Route path="investment" element={<DashBoard />} />
          <Route path="settings" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
