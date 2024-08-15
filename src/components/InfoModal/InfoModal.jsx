import React from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import styles from './InfoModal.module.css'

const InfoModal = ({ open, handleClose, data }) => {

    // console.log(data);

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
                        <p>{data?.name}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Vehicle</p>
                            <p>:</p>
                        </div>
                        <p style={{ fontWeight: "700" }}>{data?.tdVehicle}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Phone Number</p>
                            <p>:</p>
                        </div>
                        <p>{data?.phone}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Date</p>
                            <p>:</p>
                        </div>
                        <p style={{ fontWeight: "700" }}>{data?.date}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Email</p>
                            <p>:</p>
                        </div>
                        <p>{data?.email}</p>
                    </div>
                    <div className={styles.modalContentsInner}>
                        <div className={styles.modalContentsFirst}>
                            <p>Time</p>
                            <p>:</p>
                        </div>
                        <p>{data?.time}</p>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default InfoModal