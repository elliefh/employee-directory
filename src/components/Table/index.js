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
            <th className="align-middle">Image</th>
            <th className="align-middle">
                First Name
                <Button variant="outline-secondary btn-sm m-2" onClick={props.firstnamesort}>Sort</Button>
            </th>
            <th className="align-middle">
                Last Name
                <Button variant="outline-secondary btn-sm m-2" onClick={props.lastnamesort}>Sort</Button>
            </th>
            <th className="align-middle">Email</th>
            <th className="align-middle">State</th>
            <th className="align-middle">
                Gender
                <ButtonGroup>
                    <DropdownButton as={ButtonGroup} title="Filter By" id="bg-nested-dropdown" variant="outline-secondary btn-sm m-2">
                    <Dropdown.Item eventKey="male" onClick={props.filtermale}>male</Dropdown.Item>
                    <Dropdown.Item eventKey="female" onClick={props.filterfemale}>female</Dropdown.Item>
                    <Dropdown.Item eventKey="all" onClick={props.nofilter}>all</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </th>
            </tr>
        </thead>
        <tbody>
            {props.children}
        </tbody>
        </Table>
    )
}

export default MyTable;