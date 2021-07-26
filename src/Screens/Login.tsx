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

import cogClient from '../Cognito';
import { InitiateAuthCommand, InitiateAuthCommandInput} from '@aws-sdk/client-cognito-identity-provider';

export const Login: React.FC = (props: any) => {
    const user = useSelector((state: IAppState) => state.user);
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        userName: '',
        password: ''
    });

    async function submitForm(event: FormEvent) {
        event.preventDefault();
        const params: InitiateAuthCommandInput = {
            AuthFlow: "USER_PASSWORD_AUTH",
            AuthParameters: {
                USERNAME: userInfo.userName,
                PASSWORD: userInfo.password,
                SCOPE: "openid"
            },
            ClientId: "gptc74a8d8t29m3a4pos69c2a"
        }

        const resp1 = await cogClient.send(new InitiateAuthCommand(params));
        console.log(resp1);
        console.log('step 1');
        const resp2 = await axios.get('https://90yylhrbbh.execute-api.us-east-2.amazonaws.com/Prod/user/bob', {headers: {Authorization: resp1.AuthenticationResult?.AccessToken}})
        console.log(resp2);
        console.log('this is working');
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