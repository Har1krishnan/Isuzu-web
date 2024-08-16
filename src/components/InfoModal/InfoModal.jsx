import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './InfoModal.module.css'

const InfoModal = ({ open, handleClose, data }) => {

    // console.log(data);

    const timeString = data?.pickup_time;
    let formattedTime = '';

    if (timeString) {
        const [hours, minutes] = timeString.split(':');
        const date = new Date();
        date.setHours(parseInt(hours), parseInt(minutes));

        const options = { hour: 'numeric', minute: 'numeric', hour12: true };
        formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h6>Test Drive Details</h6>
                </div>
                <div className={styles.modalContents}>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Name</p>
                            <p>:</p>
                        </div>
                        <p>{data?.first_name} {data?.last_name}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Vehicle</p>
                            <p>:</p>
                        </div>
                        <p style={{ fontWeight: "700" }}>{data?.variant}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Phone Number</p>
                            <p>:</p>
                        </div>
                        <p>{data?.phone_number}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Date</p>
                            <p>:</p>
                        </div>
                        <p style={{ fontWeight: "700" }}>{data?.pickup_date}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Email</p>
                            <p>:</p>
                        </div>
                        <p>{data?.user_email}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Time</p>
                            <p>:</p>
                        </div>
                        <p>{formattedTime}</p>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default InfoModal