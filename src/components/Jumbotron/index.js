import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"

function MyJumbotron(props) {
    return(<Jumbotron>
        <h1>Employee Directory</h1>
        <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
        </p>
        <p>
            {/* <Button variant="primary">Learn more</Button> */}
        </p>
    </Jumbotron>    
    )
}

export default MyJumbotron;