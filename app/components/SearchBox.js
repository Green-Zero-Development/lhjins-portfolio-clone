import React, { useState } from 'react';
import lunr from 'lunr';

function searchResultClick(result) {
    const clickedResult = result.target.href.split("#")[1];
    const faqAnchors = document.querySelectorAll('.faq-anchor');
    for (let i = 0; i < faqAnchors.length; i++) {
        if (clickedResult === faqAnchors[i].id) {
            faqAnchors[i].nextElementSibling.click();
        }
    }
}

function createSearchIndex(data) {
    return lunr(function () {
      this.field('question'); // Specify the fields you want to include in the index
      this.ref('question'); // Specify the unique identifier field
  
      data.forEach(function (doc) {
        this.add(doc); // Add documents to the index
      }, this);
    });
}

function SearchBox({ data }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const idx = createSearchIndex(data);
    const results = idx.search(query);
    setSearchResults(results);
};
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search FAQs"
        className="search-input"
      />
      <ul className="search-results">
        {searchResults.map((result) => (
          <a key={result.ref} href={'#' + encodeURIComponent(result.ref.slice(0, 50))} onClick={searchResultClick}>{result.ref}</a>
        ))}
      </ul>
    </div>
  );
}

export default SearchBox;