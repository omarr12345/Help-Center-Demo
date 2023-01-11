import React, { useEffect } from "react";
import "./searchoutput.css";
import { useParams } from "react-router";
import Mark from "mark.js";
import allData from "../../Backend/Data.json";
function SearchOutput() {
  let { word } = useParams();
  const arr = [
    { a: "abc", b: "efg", c: "hij" },
    { a: "abc", b: "efg", c: "hij" },
    { a: "123", b: "456", c: "789" },
  ];

  const res = allData.filter((obj) =>
    Object.values(obj).some((val) => val.includes(word))
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
  );
}

export default SearchOutput;
