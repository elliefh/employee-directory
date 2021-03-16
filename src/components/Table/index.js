import React from "react";
import Table from "react-bootstrap/Table"
import Button from 'react-bootstrap/Button';

function MyTable(props) {
return(
    <Table striped bordered hover>
    <thead>
        <tr>
        <th class="align-middle">Image</th>
        <th>
            First Name
            <Button variant="outline-secondary btn-sm m-2">Sort</Button>
        </th>
        <th>Last Name
        <Button variant="outline-secondary btn-sm m-2">Sort</Button>
        </th>
        <th class="align-middle">Email</th>
        <th class="align-middle">State</th>
        </tr>
    </thead>
    <tbody>
        {props.children}
    </tbody>
    </Table>
)}

export default MyTable;