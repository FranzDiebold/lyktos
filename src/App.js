import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.scss';

import ScrollToTop from './utils/ScrollToTop';
import Layout from './Layout';
import LoadGods from './utils/LoadGods';

function App() {
  const [godsData, setGodsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    LoadGods()
      .then(godsData => {
        setGodsData(godsData);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <Router>
      <ScrollToTop>
        <Layout godsData={godsData} isLoading={isLoading} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
