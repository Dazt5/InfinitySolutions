import React from 'react';

export const SignUpForm = () => {

    return (
        <form>
            <section className="copy">
                <h2>Sign Up</h2>
                <div className="login-container">
                    <p>Already have an account? <a href="#"> <strong>Log In</strong> </a> </p>
                </div>
            </section>
            <div className="input-container name">
                <label>Full name</label>
                <input type="text" id="fname" name="fname" />
            </div>

            <div className="input-container email">
                <label>Email</label>
                <input type="email" id="email" name="email" />
            </div>

            <div className="input-container password">
                <label>Password</label>
                <input type="password" id="password" name="password" placeholder="Must be at least 6 characters" />
                <i className="far fa-eye-slash"></i>
            </div>

            <div className="input-container password">
                <label>Confirm your Password</label>
                <input type="password" id="password" name="password" placeholder="Must be at least 6 characters" />
                <i className="far fa-eye-slash"></i>
            </div>
            <button className="signup-btn" type="submit">
                Sign Up
        </button>

            <section className="copy legal">
                <p>
                    <span className="small">
                        By continuing, you agree to acept our
                        <br />
                        <a href="#">
                            Privacy Policy
                        </a>
                            &amp;
                        <a href="#">
                            Terms of Service
                        </a>.
                    </span>
                </p>
            </section>

        </form>
    )
}