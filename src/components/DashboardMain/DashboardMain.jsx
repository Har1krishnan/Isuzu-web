import React, { useEffect, useState } from 'react'
import People from '../../Assets/Imgs/People.png'
import Avatar2 from '../../Assets/Imgs/Avatar2.png'
import Isuzu1 from '../../Assets/Imgs/Isuzu1.png'
import GreenCheckbox from '../../Assets/Imgs/CheckboxGreen.png'
import YellowCheckbox from '../../Assets/Imgs/CheckboxYellow.png'
import RedCheckbox from '../../Assets/Imgs/CheckboxRed.png'
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import styles from './DashboardMain.module.css'
import InfoModal from '../InfoModal/InfoModal'
import axios from 'axios'

const DashboardMain = () => {

    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [tableData, setTableData] = useState(null)
    const [modalData, setModalData] = useState(null)

    const handleOpenInfoModal = (data) => {
        setModalData(data)
        setOpenInfoModal(true);
    }
    const handleCloseInfoModal = () => {
        setModalData(null)
        setOpenInfoModal(false);
    }

    const upcomingData = [
        {
            no: "001",
            name: "Ram Kumar",
            tdVehicle: "ISUZU D MAX",
            phone: "9825463274",
            email: "kumar@gmail.com",
            date: "27 May 2024",
            time: "9:00 AM To 10:00 AM"
        },
        {
            no: "002",
            name: "Sanjay",
            tdVehicle: "ISUZU MU-X",
            phone: "9831456745",
            email: "sanjay002@gmail.com",
            date: "28 May 2024",
            time: "9:00 AM To 10:00 AM"
        },
        {
            no: "003",
            name: "Arun",
            tdVehicle: "ISUZU V-CROSS",
            phone: "7840167923",
            email: "arun999@gmail.com",
            date: "29 May 2024",
            time: "9:00 AM To 10:00 AM"
        },
    ]

    const managePartsData = [
        {
            partNo: "8941583280",
            issueType: "Customer Paid",
            quantity: "1",
            taxValue: "89.41"
        },
        {
            partNo: "5876150050",
            issueType: "Customer Paid",
            quantity: "4",
            taxValue: "104.32"
        },
        {
            partNo: "5876102620",
            issueType: "Goodwill",
            quantity: "1",
            taxValue: "1008.56"
        },
        {
            partNo: "5876150050",
            issueType: "Customer Paid",
            quantity: "4",
            taxValue: "104.32"
        },
    ]

    const manageLabourData = [
        {
            partNo: "LAB3280",
            issueType: "Customer Paid",
            quantity: "1",
            taxValue: "450.00"
        },
        {
            partNo: "WASH79878",
            issueType: "Customer Paid",
            quantity: "4",
            taxValue: "500.54"
        },
        {
            partNo: "WHEELL778",
            issueType: "Goodwill",
            quantity: "1",
            taxValue: "300.67"
        },
        {
            partNo: "WASH79878",
            issueType: "Customer Paid",
            quantity: "4",
            taxValue: "500.54"
        },
    ]

    const fetchTableData = async () => {
        try {
            const response = await axios.get("http://54.214.126.94/api/list/")
            setTableData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }
    // console.log('tableData===>', tableData);

    useEffect(() => {
        fetchTableData()
    }, [])

    return (
        <div className={styles.DashboardMain}>
            <div className={styles.DashboardInner}>
                <div className={styles.dashboardFirst}>
                    <h3>Your Dashboard</h3>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.cardText}>
                                <h5>Earnings
                                    MTD</h5>
                                <p>1,004k</p>
                            </div>
                            <img src={People} alt="" />
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardText}>
                                <h5>Registered Customers</h5>
                                <p>531</p>
                            </div>
                            <img src={People} alt="" />
                        </div>
                        <div className={styles.card}>
                            <div className={styles.cardText}>
                                <h5>Completed Appointments</h5>
                                <p>284</p>
                            </div>
                            <img src={People} alt="" />
                        </div>
                    </div>
                </div>
                <div className={styles.dashboardSecond}>
                    <h3>Upcoming Appointments</h3>
                    <TableContainer component={Paper} className={styles.upcomingTableDiv}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table" className={styles.upcomingTable}>
                            <TableHead>
                                <TableRow>
                                    <TableCell>No.</TableCell>
                                    <TableCell align="left">Name</TableCell>
                                    <TableCell align="left">Test Drive Vechicle</TableCell>
                                    <TableCell align="left">Phone No</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Date</TableCell>
                                    <TableCell align="left">Test Drive History</TableCell>
                                    <TableCell align="left">Contact</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tableData?.map((item) => (
                                    <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left">
                                            {item.id}
                                        </TableCell>
                                        <TableCell align="left">{item.first_name} {item.last_name}</TableCell>
                                        <TableCell align="left" style={{ fontWeight: "700" }}>{item.variant}</TableCell>
                                        <TableCell align="left" style={{ fontWeight: "700" }}>{item.phone_number}</TableCell>
                                        <TableCell align="left">{item.user_email}</TableCell>
                                        <TableCell align="left">{item.pickup_date}</TableCell>
                                        <TableCell align="left">
                                            <button className={styles.viewButton} onClick={() => handleOpenInfoModal(item)}>View</button>
                                        </TableCell>
                                        <TableCell align="left">
                                            <button className={styles.callButton}>Call</button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    <InfoModal open={openInfoModal} handleClose={handleCloseInfoModal} data={modalData} />
                </div>
                <div className={styles.dashboardThird}>
                    <h3>Current Customer</h3>
                    <div className={styles.demandedRepair}>
                        <div className={styles.demandedRepairFirst}>
                            <img src={Isuzu1} alt="" />
                            <div className={styles.customerDetails}>
                                <div className={styles.avatarImage}>
                                    <img src={Avatar2} alt="" />
                                </div>
                                <div className={styles.contactDetails}>
                                    <ul>
                                        <li>
                                            <span>Anjali Mathew</span>
                                        </li>
                                        <li>
                                            <PhoneOutlinedIcon /><span>+91 8087878879</span>
                                        </li>
                                        <li>
                                            <PlaceOutlinedIcon /><span>MGR Street, Chennai</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className={styles.demandedRepairSecond}>
                            <div className={styles.demandedRepairSecondHeader}>
                                <h5>Demanded Repair</h5>
                            </div>
                            <div className={styles.demandedRepairSecondBody}>
                                <div className={styles.demandedRepairContent}>
                                    <img src={GreenCheckbox} alt="" />
                                    <p>Engine oil replacement or top-ups as required</p>
                                </div>
                                <div className={styles.demandedRepairContent}>
                                    <img src={GreenCheckbox} alt="" />
                                    <p>Standard and completed vehicle checks </p>
                                </div>
                                <div className={styles.demandedRepairContent}>
                                    <img src={GreenCheckbox} alt="" />
                                    <p>Air filter service or replacement if it needed</p>
                                </div>
                                <div className={styles.demandedRepairContent}>
                                    <img src={YellowCheckbox} alt="" />
                                    <p>Service or replacement of the A/C filter</p>
                                </div>
                                <div className={styles.demandedRepairContent}>
                                    <img src={YellowCheckbox} alt="" />
                                    <p>Oil filter service or replacement</p>
                                </div>
                                <div className={styles.demandedRepairContent}>
                                    <img src={RedCheckbox} alt="" />
                                    <p>Brake service</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboardFourth}>
                    <h3>Manage Parts</h3>
                    <div className={styles.managePartsDiv}>
                        <TableContainer component={Paper} className={styles.managePartsTableDiv}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" className={styles.managePartsTable}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Part No</TableCell>
                                        <TableCell align="left">Issue Type</TableCell>
                                        <TableCell align="left">Quantity</TableCell>
                                        <TableCell align="left">Taxable Value</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {managePartsData.map((row) => (
                                        <TableRow
                                            key={row.partNo}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left">
                                                {row.partNo}
                                            </TableCell>
                                            <TableCell align="left">{row.issueType}</TableCell>
                                            <TableCell align="left" style={{ fontWeight: "700" }}>{row.quantity}</TableCell>
                                            <TableCell align="left" style={{ fontWeight: "700" }}>{row.taxValue}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className={styles.vehicleParts}>
                            <div className={styles.vehiclePartsHeader}>
                                <h6>Available Vehicle Parts</h6>
                            </div>
                            <div className={styles.vehiclePartsContent}>
                                <ul>
                                    <li>Disc Brake</li>
                                    <li>Window</li>
                                    <li>Air Filter</li>
                                    <li>Carburetor</li>
                                    <li>Plug</li>
                                    <li>Battery</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dashboardFifth}>
                    <h3>Manage Labour</h3>
                    <div className={styles.managePartsDiv}>
                        <TableContainer component={Paper} className={styles.managePartsTableDiv}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table" className={styles.managePartsTable}>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Part No</TableCell>
                                        <TableCell align="left">Issue Type</TableCell>
                                        <TableCell align="left">Quantity</TableCell>
                                        <TableCell align="left">Taxable Value</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {manageLabourData.map((row) => (
                                        <TableRow
                                            key={row.partNo}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell align="left" style={{ fontWeight: "700" }}>
                                                {row.partNo}
                                            </TableCell>
                                            <TableCell align="left">{row.issueType}</TableCell>
                                            <TableCell align="left" style={{ fontWeight: "700" }}>{row.quantity}</TableCell>
                                            <TableCell align="left" style={{ fontWeight: "700" }}>{row.taxValue}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className={styles.vehicleParts}>
                            <div className={styles.vehiclePartsHeader}>
                                <h6>Available Employee</h6>
                            </div>
                            <div className={styles.vehiclePartsContent}>
                                <ul>
                                    <li>Kumar</li>
                                    <li>Vishnu</li>
                                    <li>Arjun</li>
                                    <li>Reddy</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardMain