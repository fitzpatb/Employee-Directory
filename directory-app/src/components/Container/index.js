import { useEffect, useState } from "react";
import Search from "../Search";
import Employees from "../Employees";

function Container() {
  const [employeeResults, setEmployeeResults] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const employeeSearch = (event) => {
    let searchArray = employeeResults.filter((employee) => {
      return (
        employee.name.first.toLowerCase().includes(event.target.value.toLowerCase()) || employee.name.last.toLowerCase().includes(event.target.value.toLowerCase()) || employee.email.toLowerCase().includes(event.target.value.toLowerCase())
      )
    })
    setSearchResults(searchArray);
  }

  const sortEmail = () => {
    const sortEmployees = employeeResults.sort((a, b) => {
      return a.email > b.email ? 1 : -1;
    })
    setSearchResults([...sortEmployees]);
  }

  const sortFirst = () => {
    const sortEmployees = employeeResults.sort((a, b) => {
      return a.name.first > b.name.first ? 1 : -1;
    })
    setSearchResults([...sortEmployees]);
  }

  const sortLast = () => {
    const sortEmployees = employeeResults.sort((a, b) => {
      return a.name.last > b.name.last ? 1 : -1;
    })
    setSearchResults([...sortEmployees]);
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
        sortEmail={sortEmail}
        sortFirst={sortFirst}
        sortLast={sortLast}
        searchResults={searchResults}

      />
    </div>
  )
}


export default Container;