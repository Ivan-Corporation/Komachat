import React from 'react'
import { GoogleOutlined } from '@ant-design/icons'
import "firebase/app";


import firebase from 'firebase/app';

import { auth } from '../firebase'

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h1>Komachat</h1>

                <div
                    className="login-button google"
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Войти через Google
                </div>
                <br /> <br />


            </div>
        </div>
    );
}

export default Login