import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles.css';

const layout = ({props,children}) => {

    if (localStorage.getItem('token')) {
        props.history.push('/dashboard');
    }
    
    return (
        <div className="split-screen">
            <div className="left">

               

            </div>

            <div className="right">
                {children}
            </div>

        </div>
    )

};

export const Layout = withRouter(layout)

