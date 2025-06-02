import { Routes, Route, Navigate } from 'react-router';

import Smiles from "./pages/smiles";
import Layout from "./components/Layout";
import Contacts from "./pages/contacts";
import About from "./pages/about";
import TodosRedux from "./pages/todos-redux";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<Smiles />} />
              <Route path="contacts" element={< Contacts />} />
              <Route path="about" element={<About />} />
              <Route path="todos-redux" element={<TodosRedux />} />
              <Route path="*" element={<Navigate to="/" />} />
          </Route>
      </Routes>
  );
}

export default App;
