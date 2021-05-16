import React from "react";

function Search() {
  return (
      <form className="form">
        <input
          name="search"
          type="text"
          placeholder="Search here"
        />
        <button className="btn btn-success"
          type="submit">
          Search
        </button>
      </form>
  )
}

export default Search;