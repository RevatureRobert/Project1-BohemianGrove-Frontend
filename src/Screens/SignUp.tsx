import '../Styles/SignUp.css';

// Reactstrap components used
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label, Row, Col
} from 'reactstrap';

import { User } from '../Models/User'
import React, { ChangeEvent, FormEvent, useState } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { IAppState } from '../Redux/Store';
import { Redirect } from 'react-router-dom';
import { UserAction } from '../Redux/Actions';

import { SignUpCommand, SignUpCommandInput } from '@aws-sdk/client-cognito-identity-provider';
import cogClient from '../Cognito';

export const SignUp: React.FC = (props: any) => {
    const user = useSelector((state: IAppState) => state.user);
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({
        userName: '',
        displayName: '',
        profileImg: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png',
        email: '',
        password: ''
    });

    const [emailValidation, setEmailState] = useState('has-danger');

    function validateEmail(input: ChangeEvent<HTMLInputElement>) {
        const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRegx.test(input.target.value)) setEmailState('has-success');
        else setEmailState('has-danger');
    }

    function submitForm(event: FormEvent) {
        event.preventDefault();
        const params: SignUpCommandInput = {
            ClientId: "tcl937mh5q8gihnalgvcmnn1r",
            Username: userInfo.userName,
            Password: userInfo.password,
            UserAttributes: [
                {
                    Name: "email",
                    Value: userInfo.email
                }
            ]
        }
        cogClient.send(new SignUpCommand(params)).then(resp => {
            console.log(resp);
        });
    }

    return (
        <div id="sign-up-form" className="SignUpComponent">
            {user && <Redirect to="/feed" />}
            <h2>Bohemian Grove</h2>
            <Form className="form" onSubmit={(e) => submitForm(e)} >
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                        valid={emailValidation === "has-success"}
                        invalid={emailValidation === "has-danger"}
                        value={userInfo.email}
                        onChange={(e) => {
                            validateEmail(e);
                            setUserInfo({...userInfo, email: e.target.value});
                        }}
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
                        onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}
                    />
                </FormGroup>
                <p></p>
                <FormGroup>
                    <Label for="displayName">Handle</Label>
                    <Input
                        type="text"
                        name="handle"
                        id="displayName"
                        onChange={(e) => setUserInfo({...userInfo, displayName: e.target.value})}
                    />
                </FormGroup>
                <p></p>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input
                        type="text"
                        name="username"
                        id="username"
                        onChange={(e) => setUserInfo({...userInfo, userName: e.target.value})}
                    />
                </FormGroup>
                <Row>
                    <Col>
                        <Button id="submit-button" onSubmit={(e) => submitForm(e)}>Submit</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}

export default SignUp;