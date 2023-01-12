import React, { useEffect } from "react";
import "./searchoutput.css";
import { useParams } from "react-router";
import Mark from "mark.js";
import allData from "../../Backend/Data.json";
import { Link } from "react-router-dom";
function SearchOutput() {
  let { word } = useParams();
  const res = allData.filter((obj) =>
    Object.values(obj).some((val) =>
      val.toLowerCase().match(word.toLowerCase())
    )
  );

  console.log(res);

  useEffect(() => {
    const markInstance = new Mark(document.querySelector("#articles-cont"));
    markInstance.unmark({
      done: () => {
        markInstance.mark(word);
      },
    });
  }, [word]);

  return (
    <>
      <h3 className="fw-bold text-center">Search Results : {res.length}</h3>
      <div className="search-output container" id="articles-cont">
        {res.map((r, index) => {
          return (
            <div key={index}>
              <div className="fw-bold my-2 article-name">{r.articleName}</div>
              <div className="article-data">{r.articleData}</div>
              <br />
              <br />
            </div>
          );
        })}
      </div>
      <div className="container text-center">
        <Link className="fw-bold" to="/">
          Go Back To Help Center
        </Link>
      </div>
    </>
  );
}

export default SearchOutput;
