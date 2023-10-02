import AllComments from './pages/AllComments';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllComments />} />
      <Route path="/item/:id" element={<AllComments />} />
    </Routes>
  );
}

export default App;
