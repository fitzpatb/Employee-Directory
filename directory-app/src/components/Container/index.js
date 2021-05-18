import { useEffect, useState } from "react";
import Search from "../Search";
import Employees from "../Employees";

function Container() {
  const [employeeResults, setEmployeeResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const employeeSearch = (event) => {
    let searchArray = employeeResults.filter((employee) => {
      return (
        employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    setSearchResults(searchArray);
  }

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
    .then((response) => response.json())
    .then((data) => {
      setEmployeeResults(data.results)
      setSearchResults(data.results)
      console.log(data.results)
    })
  }, []);

  return (
    <div className="container">
      <Search
        employeeSearch={employeeSearch}
      />
      <Employees
        searchResults={searchResults}
      />
    </div>
  )
}


export default Container;