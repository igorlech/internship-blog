import './App.css';
import { Navigate, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:slug" element={<BlogPost />} />
        <Route path="*" element={<Navigate to = "/" />} />
      </Routes>
    </main>
  );
}

export default App;
