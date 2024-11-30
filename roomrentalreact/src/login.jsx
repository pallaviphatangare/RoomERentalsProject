import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css'; 

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            errorMessage: '',
            userType: '',
            accountNumber: '',
            isAuthenticated: false,
        };
    }

    handleToggle = () => {
        this.setState((prevState) => ({
            isLogin: !prevState.isLogin,
            errorMessage: '',
            userType: '',
            accountNumber: '',
        }));
    };

    handleSignUp = async (e) => {
        e.preventDefault();
        const name = e.target.signupName.value;
        const email = e.target.signupEmail.value;
        const password = e.target.signupPassword.value;
    
        if (name && email && password) {
            const userType = prompt("Are you a Tenant or Owner? (Type 'Tenant' or 'Owner')") || '';
    
            const response = await fetch('http://localhost:8080/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    userType,
                }),
            });
    
            const data = await response.json();
            if (response.ok) {
                alert(data);
                e.target.reset();
            } else {
                this.setState({ errorMessage: 'Error registering user!' });
            }
        } else {
            this.setState({ errorMessage: 'Please fill all the fields!' });
        }
    };
    

    handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.loginEmail.value;
        const password = e.target.loginPassword.value;

        if (email && password) {
            const userType = prompt("Are you a Tenant or Owner? (Type 'Tenant' or 'Owner')") || '';

            if (userType.toLowerCase() === 'tenant' || userType.toLowerCase() === 'owner') {
                this.setState({
                    userType,
                    isAuthenticated: true,
                });
            } else {
                alert('Invalid user type. Please enter either "Tenant" or "Owner".');
            }
        } else {
            this.setState({ errorMessage: 'Please fill all the fields!' });
        }
    };

    render() {
        const { isLogin, errorMessage, userType, isAuthenticated } = this.state;

        if (isAuthenticated) {
            if (userType.toLowerCase() === 'tenant') {
                return <Navigate to="/tenant" />;  
            } else if (userType.toLowerCase() === 'owner') {
                return <Navigate to="/owner" />;  
            }
        }

        return (
            <div className="login-container">
                <div className="auth-box">
                    <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    {isLogin ? (
                        <form onSubmit={this.handleLogin}>
                            <input type="email" id="loginEmail" placeholder="Enter email" required />
                            <input type="password" id="loginPassword" placeholder="Enter password" required />
                            <button type="submit" className="btn">Login</button>
                        </form>
                    ) : (
                        <form onSubmit={this.handleSignUp}>
                            <input type="text" id="signupName" placeholder="Full Name" required />
                            <input type="email" id="signupEmail" placeholder="Email" required />
                            <input type="password" id="signupPassword" placeholder="Password" required />
                            <button type="submit" className="btn">Sign Up</button>
                        </form>
                    )}

                    <div className="toggle">
                        <span onClick={this.handleToggle}>
                            {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
