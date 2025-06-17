import { Routes, Route, Navigate } from 'react-router';

import Layout from './components/Layout';

import About from './pages/about'
import Skills from './pages/skills'
import Projects from './pages/projects'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
  );
}

export default App;
