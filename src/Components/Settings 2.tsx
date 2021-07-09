import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, FormGroup, Label, FormText, Input, Button } from "reactstrap";
import { User } from "../Models/User";
import { UserAction } from "../Redux/Actions";
import { IAppState } from "../Redux/Store";


const Settings: React.FC = (props: any) => {
    const user = useSelector((state: IAppState) => state.user);
    const dispatch = useDispatch();

    const [userInfo, setUserInfo] = useState({});

    const [emailValidation, setEmailState] = useState('has-danger');

    function validateEmail(input: ChangeEvent<HTMLInputElement>) {
        const emailRegx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (emailRegx.test(input.target.value)) setEmailState('has-success');
        else setEmailState('has-danger');
    }

    function submitForm(event: FormEvent) {
        event.preventDefault();
        const userToCreate = { ...user, ...userInfo };
        console.log("Sending request...", { loginToken: user?.loginToken, user: userToCreate });
        axios.put('http://localhost:3000/api/users', { loginToken: user?.loginToken, user: userToCreate }).then(resp => {
            console.log("Response received", resp);
            const userToInsert = new User(resp.data.data);
            dispatch({
                type: UserAction.LOGIN,
                payload: { user: userToInsert }
            });
        });
    }

    return (
        <div id="update-settings-form">
            <Form className="form" onSubmit={(e) => submitForm(e)} >
                <FormGroup>
                    <Label id="update-form-top-label" for="exampleEmail">Update Settings</Label>
                </FormGroup>

                <FormGroup>
                    <Label for="username">Username:</Label>
                    <FormText>{user?.userName}</FormText>

                </FormGroup>

                <FormGroup>
                    <Label for="displayName">Handle</Label>
                    <Input
                        type="text"
                        name="handle"
                        id="displayName"
                        onChange={(e) => setUserInfo({...userInfo, displayName: e.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="examplePassword">Profile Image</Label>
                    <Input
                        type="text"
                        name="profileImg"
                        id="profileImg"
                        onChange={(e) => setUserInfo({...userInfo, profileImg: e.target.value})}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        valid={emailValidation === "has-success"}
                        invalid={emailValidation === "has-danger"}
                        onChange={(e) => {
                            validateEmail(e);
                            setUserInfo({...userInfo, email: e.target.value});
                        }}
                    />
                </FormGroup>

                <Button color="primary" id="submit-button" onSubmit={(e) => submitForm(e)}>Submit</Button>
            </Form>
        </div>
    );
}

export default Settings