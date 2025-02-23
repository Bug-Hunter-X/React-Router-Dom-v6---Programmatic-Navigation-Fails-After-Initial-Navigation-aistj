import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const navigate = useNavigate();
  const [navigated, setNavigated] = useState(false);

  const handleClick = () => {
    navigate('/about');
    setNavigated(!navigated);
  };

  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
}

function About() {
  const navigate = useNavigate();
  const [navigated, setNavigated] = useState(false);

  const handleClick = () => {
    navigate('/');
    setNavigated(!navigated);
  };

  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}