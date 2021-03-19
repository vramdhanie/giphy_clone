import { useState } from "react";

const Search = ({ doSearch }) => {
  const [term, setTerm] = useState("");

  function searchHandler(e) {
    e.preventDefault();
    if (term.trim() !== "") {
      doSearch(term);
    }
  }

  return (
    <div className="search">
      <form onSubmit={searchHandler}>
        <label for="term">Search</label>
        <input
          type="text"
          id="term"
          name="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
};

export default Search;
