import React from "react";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function MyTable(props) {
return(
    <Table striped bordered hover>
    <thead>
        <tr>
        <th class="align-middle">Image</th>
        <th class="align-middle">
            First Name
            <Button variant="outline-secondary btn-sm m-2">Sort</Button>
        </th>
        <th class="align-middle">
            Last Name
            <Button variant="outline-secondary btn-sm m-2">Sort</Button>
        </th>
        <th class="align-middle">Email</th>
        <th class="align-middle">State</th>
        <th class="align-middle">
            Gender
            <ButtonGroup>
                <DropdownButton as={ButtonGroup} title="Filter By" id="bg-nested-dropdown" variant="outline-secondary btn-sm m-2">
                <Dropdown.Item eventKey="1">male</Dropdown.Item>
                <Dropdown.Item eventKey="2">female</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>
        </th>
        </tr>
    </thead>
    <tbody>
        {props.children}
    </tbody>
    </Table>
)}

export default MyTable;