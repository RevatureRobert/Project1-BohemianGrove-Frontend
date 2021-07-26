import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IAppState } from "../Redux/Store";
import { Redirect, useParams } from "react-router-dom";
import { IUser } from "../models/User";
import axios from "axios";
import UserList from "../Components/UserList";

export const Search: React.FC = (props: any) => {
    const user = useSelector((store: IAppState) => store.user);
    const params: any = useParams()

    const [users, setUsers] = useState([] as IUser[])

    function refresh() {
        axios.get("http://localhost:3000/api/users/search/" + params.term).then(resp => {
            setUsers(resp.data.data);
        });
    }

    useEffect(refresh, [params]);
    
    return (
        <div>
            {!user && <Redirect to="/login" />}
            <UserList users={users}/>
        </div>
    );
} 

export default Search;