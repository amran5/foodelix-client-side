import React from "react";
import './Login.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    // const { signInUsingGoogle, userLogin } = useAuth();
    const { signInUsingGoogle, userLogin, setIsLoading } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || "/home";

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri);
            })
            .finally(() => setIsLoading(false));
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        const { Email, Password } = data;
        userLogin(Email, Password);
    };
    return (
        <div style={{ height: "calc(79vh)" }}>
            <div className="container">
                <div>
                    <h1 className="title-cmn">Please Login Here</h1>
                    <div className="signup-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                            {errors.Email && (
                                <span className="field-error">This field is required</span>
                            )}
                            <input
                                required
                                type="password"
                                placeholder="Password"
                                {...register("Password", {
                                    required: true,
                                    pattern:
                                        /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
                                })}
                            />
                            {errors.Password && (
                                <span className="field-error">
                                    Password should have at least 8 characters, 2 uppercase, 3
                                    lowercase, 1 special character, 2 numbers.
                                </span>
                            )}
                            <input className="submit-btn" type="submit" value="Sign In" />
                        </form>
                        <Link to="/signUp">New to Foodelix?</Link>
                    </div>
                    <div sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 2 }}>
                        <p>Or sign in using</p>
                        <button
                            className="bg-primary text-white rounded-3"
                            onClick={handleGoogleLogin}
                        >
                            Sign In using Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;