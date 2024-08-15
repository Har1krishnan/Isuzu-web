import React from 'react'
import PieChart from '../../Assets/Imgs/PieChart.png'
import BarChart from '../../Assets/Imgs/BarChart.png'
import Order from '../../Assets/Imgs/Order.png'
import Product from '../../Assets/Imgs/Product.png'
import LineGraph from '../../Assets/Imgs/LineGraph.png'
import Message from '../../Assets/Imgs/Message.png'
import Settings from '../../Assets/Imgs/Settings.png'
import Logout from '../../Assets/Imgs/Logout.png'
import styles from './Sidebar.module.css'

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.sidebarInner}>
                <ul>
                    <li style={{ background: "#EC1C24" }}>
                        <img src={PieChart} alt="" />
                        <span style={{ color: "#FFFFFF" }}>Dashboard</span>
                    </li>
                    <li>
                        <img src={BarChart} alt="" />
                        <span>Leaderboard</span>
                    </li>
                    <li>
                        <img src={Order} alt="" />
                        <span>Order</span>
                    </li>
                    <li>
                        <img src={Product} alt="" />
                        <span>Products</span>
                    </li>
                    <li>
                        <img src={LineGraph} alt="" />
                        <span>Sales Report</span>
                    </li>
                    <li>
                        <img src={Message} alt="" />
                        <span>Messages</span>
                    </li>
                    <li>
                        <img src={Settings} alt="" />
                        <span>Settings</span>
                    </li>
                    <li style={{ marginBottom: "0" }}>
                        <img src={Logout} alt="" />
                        <span>Sign Out</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar