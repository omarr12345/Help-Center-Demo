import React from "react";
import "./recentsearches.css";
import { Link } from "react-router-dom";

function RecentSearches() {
  return (
    <div className="recent-searches container text-center">
      <div className="row popular-searches">
        <p className="col-md-4 col-lg-2 fw-bold">Popular Searches:</p>
        <Link className="col-md-1 col-lg-2">Messaging Assistant</Link>
        <Link className="col-md-1 col-lg-2">Verify Account</Link>
        <Link className="col-md-1 col-lg-2">Credit Card Decline</Link>
        <Link className="col-md-1 col-lg-2">Argaam Professional Client</Link>
        <Link className="col-md-1 col-lg-2">Password Reset </Link>
      </div>
    </div>
  );
}

export default RecentSearches;
