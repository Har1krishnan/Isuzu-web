import React from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import DashboardMain from '../DashboardMain/DashboardMain'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div style={{ display: 'grid', gridTemplateColumns: '345px 1fr', maxWidth: "1440px", margin: "0 auto" }}>
                <Sidebar />
                <DashboardMain />
            </div>
        </div>
    )
}

export default Dashboard