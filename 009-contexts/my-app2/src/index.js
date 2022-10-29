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

// Here we're setting a default value, "Justice League" for this context
// We want to use this context across entire app, so we defined it outside any components.
// We had to export this so that components in other files can also consume this.
// if you want to use this at component level, then you would need move this line into that component's definition and remove the export command.
export const teamNameContext = React.createContext("Justice League")


function EmployeeTableRows({employee: {employeeID, firstName, lastName, salary}}) {

    return (
        <teamNameContext.Consumer>
            {
                value => {
                    return (
                        <tr key={employeeID.toString()}>
                            <td>{employeeID}</td>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{salary}</td>
                            <td>{value}</td>
                        </tr>
                    )
                }
            }

        </teamNameContext.Consumer>

    )
}

// Notice we have a lot of nesting. You can reduce the nesting a little by getting rid of the return statements,
// since the round brackets automatically implies that something is being returned.

// function EmployeeTableRows({employee: {employeeID, firstName, lastName, salary}}) {
//
//     return (
//         <teamNameContext.Consumer>
//             {
//                 value => (
//                     <tr key={employeeID.toString()}>
//                         <td>{employeeID}</td>
//                         <td>{firstName}</td>
//                         <td>{lastName}</td>
//                         <td>{salary}</td>
//                         <td>{value}</td>
//                     </tr>
//                 )
//             }
//
//         </teamNameContext.Consumer>
//
//     )
// }


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
                <th>Team</th>
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
root.render(
    // Here we're "providing" the context to the EmployeesTable component and it's children components.
    // we also overrode the default value, and set it to "Avengers"
    <teamNameContext.Provider value="Avengers">
        <EmployeesTable employees={employees}/>
    </teamNameContext.Provider>
)


reportWebVitals();
