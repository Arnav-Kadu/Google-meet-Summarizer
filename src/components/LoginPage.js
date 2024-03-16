// LoginPage.js
import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from './firebaseLogin'; // Make sure this path is correct
import { useAuth } from './AuthContext'; // Adjust the import path as necessary
import './LoginPage.css'
const LoginPage = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const { login } = useAuth(); // Directly use useAuth

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const token = result.credential.idToken;
                // Send the ID token to your backend
                fetch('/api/auth/google', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ token }),
                })
                .then(response => response.json())
                .then(data => {
                    // Assuming your backend responds with the user object
                    login(data.user); // Update the auth context
                    console.log("Login successful", data.user);
                    // Redirect or update UI
                })
                .catch((error) => {
                    console.error('Error fetching user data:', error);
                });
            })
            .catch((error) => {
                console.error('Error during Google login:', error);
            });
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button className="login-button google" onClick={handleGoogleSignIn}>Login with Google</button>
            {/* Implement other login methods as needed */}
        </div>
    );
};

export default LoginPage;
