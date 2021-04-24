import React from 'react';

export const LoginForm = () => {

    return (
        <form>
            <section className="copy">
                <h2>Log In</h2>
                <div className="login-container">
                    <p>Don't have acounnt? <a href="#"> <strong>Sign Up</strong> </a> </p>
                </div>
            </section>

            <div className="input-container email">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" />
            </div>

            <div className="input-container password">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Must be at least 6 characters" />
                <i className="far fa-eye-slash"></i>
            </div>

            <div className="input-container cta">
                <label className="checkbox-container">
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                        Remember Password
                </label>
            </div>

            <button className="signup-btn" type="submit">
                Log In
            </button>

        </form>
    )
}