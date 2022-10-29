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

// notice how we destructured the "employees" property from the "props" object.
function EmployeeTableRows({employees}){

    // Because of the above destructuring, we now don't need to do props.employees.map(... on this this line
    return employees.map((employee) =>
        <tr key={employee.employeeID.toString()}>
            <td>{employee.employeeID}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.salary}</td>
        </tr>
    )
}


function EmployeesTable(props) {


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
            <EmployeeTableRows employees={props.employees}/>
            </tbody>
        </table>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EmployeesTable employees={employees}/>);



reportWebVitals();
