import React from 'react';
import './styles.css';

export const Layout = ({ children }) => (

    <div className="split-screen">
        <div className="left">

            <section className="copy">
                <h1>Lorem ipsum dolor sit </h1>
                <p>amet consectetur adipisicing elit.</p>
            </section>

        </div>

        <div className="right">
            {children}
        </div>

    </div>


);

