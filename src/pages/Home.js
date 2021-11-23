import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";

const Home = () => {
  const [input, setInput] = useState("");

  const onSearch = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
      .then((response) => response.json())
      .then((result) => console.log(result))
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
    </div>
  );
};

export default Home;
