import React, { useState } from 'react';
import Search from './Search';
import Page from './Page';
import { getPageContent } from './wikipediaAPI';

function App() {
  const [selectedPage, setSelectedPage] = useState(null);

  const handleSearchResultClick = async (pageTitle) => {
    const pageContent = await getPageContent(pageTitle);
    setSelectedPage(pageContent);
  };

  const handleInternalLinkClick = async (pageTitle) => {
    const pageContent = await getPageContent(pageTitle);
    setSelectedPage(pageContent);
  };

  return (
    <div className="App">
      <Search onSearchResultClick={handleSearchResultClick} />
      <Page page={selectedPage} onInternalLinkClick={handleInternalLinkClick} />
    </div>
  );
}

export default App;

