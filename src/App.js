import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import PostDetailsPage from './pages/PostDetailsPage/PostDetailsPage';
import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react';
function App() {
  const [isBack, setIsBack] = useState(false);
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<FeedPage isBack={isBack} setIsBack={setIsBack} />}
          />
          <Route
            path="/detail"
            element={<PostDetailsPage setIsBack={setIsBack} />}
          />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
