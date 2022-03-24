import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../actions/auth.actions";
import { Link } from "react-router-dom";

const Register = () => {
    const dispatch = useDispatch();

    const [Form, setForm] = useState({
        firstName: "",
        lastName: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onInputChange = (e) => {
        e.preventDefault();
        setForm({ ...Form, [e.target.name]: e.target.value });
    };

    const onSubmitForm = (e) => {
        e.preventDefault();

        dispatch(register(Form));
        setForm({
            firstName: "",
            lastName: "",
            number: "",
            email: "",
            password: "",
            confirmPassword: "",
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
                                        <img src="images/wink.png" alt="" />
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
                            <div className="log-reg-area ">
                                <h2 className="log-title">Register</h2>
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
                                            value={Form.firstName}
                                            type="text"
                                            required
                                            name="firstName"
                                            id="firstName"
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <label
                                            className="control-label"
                                            for="input"
                                        >
                                            First Name
                                        </label>
                                        <i className="mtrl-select"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={Form.lastName}
                                            type="text"
                                            required
                                            name="lastName"
                                            id="lastName"
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <label
                                            className="control-label"
                                            for="input"
                                        >
                                            Last Name
                                        </label>
                                        <i className="mtrl-select"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onInputChange(e)}
                                            type="text"
                                            required
                                            id="number"
                                            name="number"
                                            value={Form.number}
                                        />
                                        <label
                                            className="control-label"
                                            for="input"
                                        >
                                            Phone Number
                                        </label>
                                        <i className="mtrl-select"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={Form.email}
                                            onChange={(e) => onInputChange(e)}
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                        />
                                        <label
                                            className="control-label"
                                            for="input"
                                        >
                                            Email Address
                                        </label>
                                        <i className="mtrl-select"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={Form.password}
                                            type="password"
                                            name="password"
                                            id="password"
                                            required
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <label
                                            className="control-label"
                                            for="input"
                                        >
                                            Password
                                        </label>
                                        <i className="mtrl-select"></i>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={Form.confirmPassword}
                                            type="password"
                                            name="confirmPassword"
                                            id="confirmPassword"
                                            required
                                            onChange={(e) => onInputChange(e)}
                                        />
                                        <label
                                            className="control-label"
                                            for="input"
                                        >
                                            Confirm Password
                                        </label>
                                        <i className="mtrl-select"></i>
                                    </div>
                                    <div className="form-radio">
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="radio"
                                                    checked="checked"
                                                />
                                                <i className="check-box"></i>
                                                Male
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="radio"
                                                />
                                                <i className="check-box"></i>
                                                Female
                                            </label>
                                        </div>
                                    </div>

                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked="checked"
                                            />
                                            <i className="check-box"></i>Accept
                                            Terms & Conditions ?
                                        </label>
                                    </div>
                                    <Link
                                        to={"/login"}
                                        title=""
                                        className="already-have"
                                    >
                                        Already have an account
                                    </Link>
                                    <div className="submit-btns">
                                        <button
                                            className="mtr-btn signup"
                                            type="submit"
                                        >
                                            <span>Register</span>
                                        </button>
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

export default Register;
