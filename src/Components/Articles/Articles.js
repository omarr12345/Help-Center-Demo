import React, { useState } from "react";
import "./Articles.css";
// import  from "../../Backend/Data.json";
import allData from "../../Backend/Data.json";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState(allData);

  const discoverArgaam = allData.filter((v) => {
    return v.articleTitle === "Discover Argaam.com";
  });

  const subscriptions = allData.filter((v) => {
    return v.articleTitle === "Subscriptions";
  });
  const manageMyAcc = allData.filter((v) => {
    return v.articleTitle === "Manage My Account";
  });
  const troubleshooting = allData.filter((v) => {
    return v.articleTitle === "TroubleShooting";
  });
  const payment = allData.filter((v) => {
    return v.articleTitle === "Payment";
  });

  console.log(articles);
  return (
    <div className="articles container">
      <div
        className="accordion accordion-flush fw-bold"
        id="accordionFlushExample"
      >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Discover Argaam.com
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {discoverArgaam.map((article) => {
                const link = `/article/${article.id}`;
                return (
                  <div key={article.id}>
                    <Link to={link}>{article.articleName}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Subscriptions
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {subscriptions.map((article) => {
                const link = `/article/${article.id}`;

                return (
                  <div key={article.id}>
                    <Link to={link}>{article.articleName}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Manage My Account
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {manageMyAcc.map((article) => {
                const link = `/article/${article.id}`;

                return (
                  <div key={article.id}>
                    <Link to={link}>{article.articleName}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFour"
              aria-expanded="false"
              aria-controls="flush-collapseFour"
            >
              TroubleShooting
            </button>
          </h2>
          <div
            id="flush-collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFour"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {troubleshooting.map((article) => {
                const link = `/article/${article.id}`;

                return (
                  <div key={article.id}>
                    <Link to={link}>{article.articleName}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseFive"
              aria-expanded="false"
              aria-controls="flush-collapseFive"
            >
              Payment
            </button>
          </h2>
          <div
            id="flush-collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingFive"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {payment.map((article) => {
                const link = `/article/${article.id}`;

                return (
                  <div key={article.id}>
                    <Link to={link}>{article.articleName}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
