import React from 'react';
import { UserLastTicket, FavoriteCorporations, DashboardUserResume } from '.';


export const UserPanel = () => {
    return (
        <main>
            <DashboardUserResume />
            <div className="recent-grid">
                <UserLastTicket />
                <FavoriteCorporations />
            </div>
        </main>
    )
}