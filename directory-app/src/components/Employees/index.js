import React from "react";

function Employees(props) {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name
            <button className="btn btn-primary" onClick={props.sortFirst}>First name ^</button>
            <button className="btn btn-primary" onClick={props.sortLast}>Last name ^</button>
          </th>
          <th>Email
            <button className="btn btn-primary" onClick={props.sortEmail}>Sort</button>
          </th>
          <th>Phone Number</th>
        </tr>
      </thead>
      {props.searchResults.map((employee, index) => {
        return (
          <tbody key={index}>
            <tr>
              <td>
                <img src={employee.picture.medium} alt={"Employee Pic"} />
              </td>
              <td>{employee.name.first + " " + employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.cell}</td>
            </tr>
          </tbody>
        )
      })}
    </table>
  )
}

export default Employees;