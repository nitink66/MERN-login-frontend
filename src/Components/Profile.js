import React from 'react'
import { useEffect } from 'react';
import { isAuth  } from '../actions/auth';
import { useHistory } from 'react-router-dom'
import Container from '@material-ui/core/Container';

const Profile = () =>{
    const history = useHistory();
    useEffect(() => {
        !isAuth() && history.push(`/register`);
    }, [history]);

    return (
        <Container component="main" maxWidth="xs">
            <h1>Cheers</h1>
            <h2>WELCOME </h2>
            <h2>RESTRICTED ACCESS</h2>
            <p>Only Registered Users Can Access This Route</p>
        </Container>
    )
}

export default Profile;