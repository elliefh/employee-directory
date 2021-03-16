import React from "react";

function MyTableRow(props) {
    return(
    <tr>
      <td><img src={props.image} alt="thumbnail"/></td>
      <td>{props.firstname}</td>
      <td>{props.lastname}</td>
      <td>{props.email}</td>
    </tr>
    )
}

export default MyTableRow;