import React, { useState } from 'react';
import styled from "@emotion/styled";
import {useRouter} from "next/router";

import Input from "../shared/Input";
import Fade from 'react-reveal/Fade';
import APIFetch from "../../utils/APIFetch";

const MinimizedBar = styled.div`
    background: #F50057;
    color: white;
    padding: 0.5rem 1rem;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    z-index: 5000;
    font-size: 15px;
    button {
        background: #FFAB00;
        border: none;
        border-radius: 10px;
        font-size: 18px;
        padding: 0.5rem 1rem;
    }
`;

const RegisterForm = styled.div`
    background: rgba(34, 34, 51, 0.95);
    color: white;
    padding: 0.5rem 0.25rem;
    position: fixed;
    bottom: 0.5rem;
    right: 0.5rem;
    z-index: 5000;
    min-height: 45vh;
    min-width: 300px;
    max-width: 25vw;
    border: 2px solid #9C27B0;
    border-radius: 8px;
    .close-button {
        background: none;
        border: none;
        font-size: 20px;
        padding: 0;
    }
    .register-button {
        background: #FFAB00;
        border: 0;
        padding: 0.5rem 1rem;
        width: 100%;
        margin-top: 1rem;
    }
`;

const RegistrationSticky = () => {

    const router = useRouter()

    const [isMinimized, setMinimized] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = ({ email, password }) => {
        APIFetch({
            query: `mutation ($username: String!, $password: String!){
              authenticateUser(username: $username, password: $password){
                success
                user
                {
                  id
                  title
                  username
                  name
                  email
                  phone
                  type
                  gender
                  city
                  state
                  country
                  isProfileComplete
                  affiliationTitle {
                     value: id
                     label: name
                  }
                  affiliationBody {
                     value: id
                     label: name
                  }
                  emailVerified: isEmailVerified
                  phoneVerified: isPhoneVerified
                }
              }
            }`,
            variables: { username: email, password }
        }).then(({ success, data, error }) => {
            if(success){
                router.push('https://register.shakticon.com/login');
            }
        });
    };

    const handleRegisterFormSubmit = () => {
        APIFetch({
            query: `mutation ($input: UserCreationInput!){
              register(input: $input){
                success
              }
            }`,
            variables: {
                input: {
                    email: email,
                    password: password,
                    name: name,
                    eventID: 1,
                }
            }
        }).then(({ success, data, error}) => {
            if(success, data?.register?.success){
                handleSignIn({ email: email, password: password });
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleRegisterFormSubmit()
    };

    return <div className="d-none d-md-block">
        {isMinimized ?
            <MinimizedBar>
                <div className="row mx-0">
                    <div className="col-md-6 d-flex align-items-center">
                       Register for ShaktiCon & ShaktiCTF
                    </div>
                    <div className="col-md-6 d-flex justify-content-end align-items-center">
                        <button
                            onClick={() => setMinimized(false)}
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </MinimizedBar> :
            <RegisterForm>
                <div className="row mx-0">
                    <div className="col-md-10 d-flex align-items-center">
                        <h4 className="mb-0">Register for ShaktiCon</h4>
                    </div>
                    <div className="col-md-2 d-flex justify-content-end align-content-start">
                        <button className="close-button" onClick={() => setMinimized(true)}>
                            <i className="fa fa-times text-danger" />
                        </button>
                    </div>
                    <form className="p-3 w-100" onSubmit={handleSubmit}>
                        <div className="mb-2">
                            <Fade up delay={100}>
                                <Input
                                    label="Name"
                                    name="name"
                                    title="Please enter your name"
                                    value={name}
                                    onChange={setName}
                                    placeholder="Enter Your Name"
                                    alwaysShowLabel
                                    isRequired
                                    className="w-100"
                                />
                            </Fade>
                        </div>
                        <div className="mb-2">
                            <Fade up delay={200}>
                                <Input
                                    label="Email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    autoComplete="email"
                                    onChange={setEmail}
                                    placeholder="Enter Your Email"
                                    alwaysShowLabel
                                    isRequired
                                    className="w-100"
                                />
                            </Fade>
                        </div>
                        <div className="mb-2">
                            <Fade up delay={300}>
                                <Input
                                    label="Password"
                                    name="new-password"
                                    type="password"
                                    value={password}
                                    onChange={setPassword}
                                    autoComplete="new-password"
                                    placeholder="Enter A Password"
                                    alwaysShowLabel
                                    isRequired
                                    className="w-100"
                                />
                            </Fade>
                        </div>
                        <Fade up delay={500}>
                            <button
                                className="register-button"
                                type="submit"
                            >
                               Register
                            </button>
                        </Fade>
                    </form>

                </div>
            </RegisterForm>
        }
    </div>

};

export default RegistrationSticky;