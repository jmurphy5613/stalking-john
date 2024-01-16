import styles from './Navbar.module.css'
import Sun from '../icons/Sun'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {

    const [hoveringThemeChange, setHoveringThemeChange] = useState<boolean>(false)

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles["theme-control-container"]}>
                    <div
                        className={styles["icon-container"]}
                        onMouseEnter={() => setHoveringThemeChange(true)}
                        onMouseLeave={() => setHoveringThemeChange(false)}
                    >
                        <Sun fill={hoveringThemeChange ? "#000000" : "#ffffff"} />
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles["pfp-container"]}>
                    <Image alt='pfp' fill src="/pfp.jpeg" />
                </div>
                <h2 className={styles.name}>John Murphy</h2>

            </div>
        </div>
    )
}

export default Navbar