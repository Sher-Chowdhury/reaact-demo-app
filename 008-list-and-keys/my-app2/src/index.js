import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const employees = [
    {
        employeeID: 1,
        firstName: "Tony",
        lastName: "Stark",
        salary: 700000
    },
    {
        employeeID: 2,
        firstName: "Peter",
        lastName: "Parker",
        salary: 80000
    },
    {
        employeeID: 3,
        firstName: "Steve",
        lastName: "Rogers",
        salary: 120000
    },
];



function EmployeesTable(props) {
    const employees = props.employees;



    const employeeTableRows = employees.map((employee) =>
        // Note, each list item needs to have a unique "key" attribute. React uses this "key" attribute internally to keep track of any changes.
        <tr key={employee.employeeID.toString()}>
            <td>{employee.employeeID}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.salary}</td>
        </tr>
    )

    return (
        <table>
            <thead>
            <tr>
                <th>Employee ID</th>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Salary</th>
            </tr>
            </thead>
            <tbody>
            {/* React has a built-in support for automatically processing a javascript array of jsx elements */}
            {employeeTableRows}
            </tbody>
        </table>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EmployeesTable employees={employees}/>);



reportWebVitals();
