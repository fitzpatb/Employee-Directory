import {React} from "react";

function Search(props) {

  const searchSubmit = (event) => {
    event.preventDefault();
  }

  return (
      <form className="form">
        <input
          name="search"
          type="text"
          placeholder="Search here"
          onChange={props.employeeSearch}
        />
        <button className="btn btn-primary"
          onClick={searchSubmit}
        >
          Search
        </button>
      </form>
  )
}

export default Search;