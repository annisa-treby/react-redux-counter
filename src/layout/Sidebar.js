import React from "react";
import {ListGroup, ListGroupItem} from "reactstrap";
import {NavLink} from "react-router-dom";

function Sidebar (){
    return(
        <ListGroup>
            <ListGroupItem>
                <NavLink to="/" activeStyle={{ color: "green" }}>
                    HOME
                </NavLink>
            </ListGroupItem>
        </ListGroup>
)
}
export default Sidebar;