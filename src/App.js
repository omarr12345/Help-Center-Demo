import { Route } from "react-router";
import Articles from "./Components/Articles/Articles";
import Navbar from "./Components/Navbar/Navbar";
import RecentSearches from "./Components/RecentSearches/RecentSearches";
import SearchBar from "./Components/SearchBar/SearchBar";
import { Routes } from "react-router";
import ArticleDetails from "./Components/ArticleDetails/ArticleDetails";
import SearchOutput from "./Components/SearchOutput/SearchOutput";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <RecentSearches />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
        <Route path="/articles/search/:word" element={<SearchOutput />} />
      </Routes>
    </div>
  );
}

export default App;
