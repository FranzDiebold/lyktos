import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import Layout from './Layout';
import LoadGods from './utils/LoadGods';

function App() {
  const [godsData, setGodsData] = useState({});

  useEffect(() => {
    LoadGods()
      .then(godsData => setGodsData(godsData))
      .catch(err => console.log(err));
  }, []);

  return (
    <Router>
      <Layout godsData={godsData} />
    </Router>
  );
}

export default App;
