import React from "react";

function Employees(props) {

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      {props.employeeResults.map((employee, index) => {
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