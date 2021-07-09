import '../Styles/SignIn.css';

// Reactstrap components
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap';

import React, { FormEvent, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { IAppState } from '../Redux/Store';
import axios from 'axios';
import { User } from '../Models/User';
import { UserAction } from '../Redux/Actions';
import { Redirect } from 'react-router-dom';

export const Login: React.FC = (props: any) => {
    const user = useSelector((state: IAppState) => state.user);
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        userName: '',
        password: ''
    });

    function submitForm(event: FormEvent) {
        event.preventDefault();
        console.log("Sending request...", { userName: userInfo.userName, password: userInfo.password });
        axios.post('http://localhost:3000/api/users/authenticate', { userName: userInfo.userName, password: userInfo.password }).then(resp => {
            console.log("Response received", resp);
            const userToInsert = new User(resp.data.data);
            dispatch({
                type: UserAction.LOGIN,
                payload: {user: userToInsert}
            });
        });
    }

    return (
        <div id="sign-in-div" className="App">
            {user !== undefined && <Redirect to="/feed"/>}
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => submitForm(e)}>
                <FormGroup>
                    <Label for="username">Username</Label>

                    <Input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Login"
                        onChange={e => setUserInfo({ ...userInfo, userName: e.target.value })}
                    />
                </FormGroup>
                <p></p>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>

                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        onChange={e => setUserInfo({...userInfo, password: e.target.value})}
                    />
                </FormGroup>
                <div className="signInButtonsContainer">
                    <Button id="submit-button">Submit</Button>
                </div>
            </Form>
        </div>
    );
}

export default Login;