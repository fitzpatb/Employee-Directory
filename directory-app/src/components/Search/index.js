import React from "react";

function Search(props) {
  return (
      <form className="form">
        <input
          name="search"
          type="text"
          placeholder="Search here"
          onChange={props.employeeSearch}
        />
        <button className="btn btn-success"
          type="submit">
          Search
        </button>
      </form>
  )
}

export default Search;