import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import MyTable from "../components/Table";
import MyTableRow from "../components/TableRow";

function Employee() {
    const [employees, setEmployees] = useState([]);
  
    // upon page load, call method to get employees
    useEffect(() => {
      getEmployees();
    }, []);
  
    // call API function to get employees and populate employees state
    const getEmployees = () => {
      API.getEmployees()
        .then((res) => {
          console.log(res.data.results)
          setEmployees(res.data.results)})
        .catch((err) => console.log("Error: " + err));
    };

    // Sort first name

    // Filter 

    return (
        <div className="container">
          <Container>
            <MyTable>
              {employees.map(employee => (
                <MyTableRow 
                  image = {employee.picture.thumbnail}
                  firstname = {employee.name.first}
                  lastname = {employee.name.last}
                  email = {employee.email}
                  key={employee.id.value}
                />
              ))}
            </MyTable>
          </Container>
        </div>
    );
}

export default Employee;



