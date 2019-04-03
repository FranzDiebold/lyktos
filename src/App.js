import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import ScrollToTop from './utils/ScrollToTop';
import Layout from './Layout';
import LoadGods from './utils/LoadGods';

function App() {
  const [godsData, setGodsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setIsLoading(true);
    LoadGods()
      .then(godsData => {
        setGodsData(godsData);
        setIsLoading(false);
        setError();
      })
      .catch(err => {
        setGodsData({});
        setError('Error loading gods data.');
        setIsLoading(false);
      });
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Layout
          godsData={godsData}
          isLoading={isLoading}
          error={error}
        />
      </ScrollToTop>
    </Router>
  );
}

export default App;
