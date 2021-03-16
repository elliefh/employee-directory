import React from "react";
import Table from "react-bootstrap/Table"

function MyTable(props) {
return(
    <Table striped bordered hover>
    <thead>
        <tr>
        <th>Image</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        </tr>
    </thead>
    <tbody>
        {props.children}
    </tbody>
    </Table>
)}

export default MyTable;