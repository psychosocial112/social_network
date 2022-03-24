import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { login } from "../../actions/auth.actions";
import wink from "../../assets/images/wink.png";
const Login = () => {
    const dispatch = useDispatch();

    const [Form, setForm] = useState({
        email: "",
        password: "",
    });
    const onInputChange = (e) => {
        e.preventDefault();
        setForm({ ...Form, [e.target.name]: e.target.value });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        dispatch(login(Form));
        setForm({
            email: "",
            password: "",
        });
    };
    return (
        <div className="theme-layout">
            <div className="container-fluid pdng0">
                <div className="row merged">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="land-featurearea">
                            <div className="land-meta">
                                <h1>Winku</h1>
                                <p>
                                    Winku is free to use for as long as you want
                                    with two active projects.
                                </p>
                                <div className="friend-logo">
                                    <span>
                                        <img src={wink} alt="" />
                                    </span>
                                </div>
                                <a href="#" title="" className="folow-me">
                                    Follow Us on
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                        <div className="login-reg-bg">
                            <div className="log-reg-area sign">
                                <h2 className="log-title">Login</h2>
                                <p>
                                    Don’t use Winku Yet?{" "}
                                    <a href="#" title="">
                                        Take the tour
                                    </a>{" "}
                                    or{" "}
                                    <a href="#" title="">
                                        Join now
                                    </a>
                                </p>
                                <form onSubmit={(e) => onSubmitForm(e)}>
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onInputChange(e)}
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                        />
                                        <label className="control-label">
                                            Username
                                        </label>
                                        <i className="mtrl-select"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
																						onChange={(e) => onInputChange(e)}
																						id="password"
																						name="password"
                                            type="password"
                                            required="required"
                                        />
                                        <label
                                            className="control-label"
                                            for="input"
                                        >
                                            Password
                                        </label>
                                        <i className="mtrl-select"></i>
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked="checked"
                                            />
                                            <i className="check-box"></i>Always
                                            Remember Me.
                                        </label>
                                    </div>
                                    <a href="#" title="" className="forgot-pwd">
                                        Forgot Password?
                                    </a>
                                    <div className="submit-btns">
                                        <button
                                            className="mtr-btn signin"
                                            type="submit"
                                        >
                                            <span>Login</span>
                                        </button>
                                        <Link
																						to={"/register"}
                                            className="mtr-btn signup"
                                            
                                        >
                                            <span>Register</span>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
