import React from "react";
import { ListGroup } from "reactstrap";
import { IUser } from "../Models/User";
import User from "./User";

interface IProps {
    users: IUser[]
}

const UserList: React.FC<IProps> = (props: IProps) => {
    return (
        <div>
            <ListGroup>
                {props.users.map((user, i) => {
                    return <User user={user}/>
                })}
            </ListGroup>
        </div>
    );
}

export default UserList;