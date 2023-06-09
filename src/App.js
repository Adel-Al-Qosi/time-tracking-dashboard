import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Body />} />
      </Routes>
    </Router>
  );
}

function Root() {
  return (
    <App />
  )
}

export default Root;
