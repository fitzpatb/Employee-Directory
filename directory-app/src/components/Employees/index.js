import React from "react";

function Employees(props) {

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name
            <button className="btn btn-secondary" onClick={props.sortFirst}>First name ^</button>
            <button className="btn btn-secondary" onClick={props.sortLast}>Last name ^</button>
          </th>
          <th>Email
            <button className="btn btn-secondary" onClick={props.sortEmail}>Sort</button>
          </th>
          <th>Phone Number</th>
        </tr>
      </thead>
      {props.searchResults.map((employee, index) => {
        return (
          <tbody key={index}>
            <tr>
              <td className="border border-dark">
                <img src={employee.picture.medium} alt={"Employee Pic"} />
              </td>
              <td className="border border-dark">{employee.name.first + " " + employee.name.last}</td>
              <td className="border border-dark">{employee.email}</td>
              <td className="border border-dark">{employee.cell}</td>
            </tr>
          </tbody>
        )
      })}
    </table>
  )
}

export default Employees;