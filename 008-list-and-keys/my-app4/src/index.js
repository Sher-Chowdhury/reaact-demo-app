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

// This input parameter definition, shows how to do even deeper level of destructuring
function EmployeeTableRows({employee: {employeeID, firstName, lastName, salary}}) {

    // Because of the above destructuring, we now don't need to do props.employee.firstName...etc, we can just use "firstName" directly
    return (
        <tr key={employeeID.toString()}>
            <td>{employeeID}</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{salary}</td>
        </tr>
    )
}


function EmployeesTable(props) {
    const employees = props.employees

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
            {/* Notice how we're using mapping at this level now */}
            {employees.map(employee => {
                return <EmployeeTableRows key={employee.employeeID} employee={employee}/>
            })
            }

            </tbody>
        </table>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<EmployeesTable employees={employees}/>);


reportWebVitals();
