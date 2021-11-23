import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

import { apiGet } from "../misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`)
      .then((result) => setResults(result))
      .catch((err) => alert(err));
  };

  const onInputChange = (e) => {
    setInput(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results</div>;
    }

    if (results && results.length > 0) {
      return (
        <div>
          {results.map((item) => (
            <div key={item.show.id}>{item.show.name}</div>
          ))}
        </div>
      );
    }

    return null;
  };

  return (
    <div>
      <MainPageLayout>
        <input
          type="text"
          onChange={onInputChange}
          value={input}
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={onSearch}>
          Search
        </button>
      </MainPageLayout>
      {renderResults()}
    </div>
  );
};

export default Home;
