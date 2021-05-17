import { useEffect, useState } from "react";
import Search from "../Search";
import Employees from "../Employees";

function Container() {
  const [employeeResults, setEmployeeResults] = useState([]);


  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
    .then((response) => response.json())
    .then((data) => {
      setEmployeeResults(data.results)
      console.log(data.results)
    })
  }, []);

  return (
    <div className="container">
      <Search />
      <Employees
        employeeResults={employeeResults}
      />
    </div>
  )
}


export default Container;