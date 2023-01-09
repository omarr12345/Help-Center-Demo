import React, { useState } from "react";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  let navigate = useNavigate();
  const [word, setWord] = useState("");
  return (
    <div className="search-bar container my-3">
      <h2 className="text-center">Help Center</h2>
      <form
        className="search-form my-3"
        onSubmit={(e) => {
          let path = `/articles/search/${word}`;
          navigate(path);
          e.preventDefault();
        }}
      >
        <input
          className="form-control w-50 f-w-bold search-inp"
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />

        <button type="submit">
          <img src={require("../../assets/search-btn.png")} alt="search-img" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
