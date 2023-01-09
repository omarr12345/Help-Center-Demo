import React from "react";
import "./searchoutput.css";
import { useParams } from "react-router";
import Mark from "mark.js";
import allData from "../../Backend/Data.json";
function SearchOutput() {
  let { word } = useParams();
  const filteredArticles = allData.filter((article) => {
    return article.articleName.includes("Article Gifting");
  });

  return (
    <div className="search-output container">
      {filteredArticles.map((f, index) => {
        return f.id;
      })}
    </div>
  );
}

export default SearchOutput;
