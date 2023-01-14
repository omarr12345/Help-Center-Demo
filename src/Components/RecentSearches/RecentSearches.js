import React from "react";
import "./recentsearches.css";
import { Link } from "react-router-dom";

function RecentSearches() {
  return (
    <div className="recent-searches container-fluid text-center">
      <div className="row popular-searches">
        <p className="col-md-2 col-lg-2 fw-bold my-2">Popular Searches:</p>
        <Link className="col-md-2 col-lg-2 col-sm-6 my-2" to="/article/12">
          Messaging Assistant
        </Link>
        <Link className="col-md-2 col-lg-2 col-sm-6 my-2" to="/article/13">
          Verify Account
        </Link>
        <Link className="col-md-2 col-lg-2 col-sm-6 my-2" to="/article/14">
          Credit Card Decline
        </Link>
        <Link className="col-md-2 col-lg-2 col-sm-6 my-2" to="/article/15">
          Argaam Professional Client
        </Link>
        <Link className="col-md-2 col-lg-2 col-sm-6 my-2" to="/article/16">
          Password Reset
        </Link>
      </div>
    </div>
  );
}

export default RecentSearches;
