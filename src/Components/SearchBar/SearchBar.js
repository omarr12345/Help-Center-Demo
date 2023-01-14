import React, { useState } from "react";
import "./searchbar.css";
import { useNavigate } from "react-router-dom";
function SearchBar() {
  let navigate = useNavigate();
  const [word, setWord] = useState("");
  return (
    <div className="search-bar container-fluid my-3">
      <h2 className="text-center">Argaam Help Center</h2>
      <form
        className="search-form my-3"
        onSubmit={(e) => {
          let path = `/articles/search/${word}`;
          navigate(path);
          e.preventDefault();
        }}
      >
        <input
          className="form-control search-inp"
          type="text"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />

        <button type="submit" style={{ borderRadius: "10px", border: "solid 1px gray" }}>
          <img src={require("../../assets/search-btn.png")} alt="search-img" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
