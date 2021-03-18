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

    // Sort by first name
    const firstnamesort = () => {
      const name = employees.sort((a, b) => (a.name.first > b.name.first ? 1 : -1));
      setEmployees([...name]);
    }
    // Sort by last name
    const lastnamesort = () => {
      const name = employees.sort((a, b) => (a.name.last > b.name.last ? 1 : -1));
      setEmployees([...name]);
    }
    // Filter by gender

    return (
        <div className="container">
          <Container>
            <MyTable
            firstnamesort = {firstnamesort} 
            lastnamesort = {lastnamesort}
            >
              {employees.map(employee => (
                <MyTableRow 
                  image = {employee.picture.thumbnail}
                  firstname = {employee.name.first}
                  lastname = {employee.name.last}
                  email = {employee.email}
                  state = {employee.location.state}
                  gender = {employee.gender}
                  key={employee.id.value}
                />
              ))}
            </MyTable>
          </Container>
        </div>
    );
}

export default Employee;



