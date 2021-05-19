import {React} from "react";

function Search(props) {

  const searchSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="search">
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
    </div>

  )
}

export default Search;