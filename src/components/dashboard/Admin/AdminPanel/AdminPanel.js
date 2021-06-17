import React from 'react';
import { CorporationList, DashboardResume, LastTickets } from './';

export const AdminPanel = () => {

    return (
        <main>
            <DashboardResume />
            <div className="recent-grid">
                <LastTickets />
                <CorporationList />
            </div>
        </main>
    )
}