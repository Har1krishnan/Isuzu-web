import React from 'react'
import Avatar from '../../Assets/Imgs/Avatar.png'
import Logo from '../../Assets/Imgs/MainLogo.png'
import SearchIcon from '@mui/icons-material/Search'
import MenuIcon from '@mui/icons-material/Menu'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <div className={styles.NavbarInner}>
                <div className={styles.avatar}>
                    <img src={Avatar} alt="" />
                </div>
                <div className={styles.mainLogo}>
                    <img src={Logo} alt="" />
                </div>
                <div className={styles.inputAndMenu}>
                    <div className={styles.search}>
                        <input type="text" placeholder='Search......' />
                        <SearchIcon />
                    </div>
                    <MenuIcon className={styles.menuIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar