import React from "react";
import "./ArticleDetails.css";
// import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import allData from "../../Backend/Data.json";

function ArticleDetails() {
  let { id } = useParams();
  const article = allData.filter((v) => {
    return v.id == id;
  });
  return (
    <div className="article-details container">
      {article.map((art, index) => {
        return (
          <div className="bg-link-light my-5" key={index}>
            <div className="fw-bold my-2" style={{ fontSize: "30px" }}>
              {art.articleName} !
            </div>
            <div className="fw-bold my-2">{art.articleData} </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArticleDetails;
