import styles from './Navbar.module.css'
import Sun from '../icons/Sun'
import { useState } from 'react'
import Image from 'next/image'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {

    const [hoveringThemeChange, setHoveringThemeChange] = useState<boolean>(false)
    const [isLightTheme, setIsLightTheme] = useState<boolean>(false)

    console.log(hoveringThemeChange)

    const getSunColor = () => {
        if (hoveringThemeChange && isLightTheme) return "#fff"
        if (hoveringThemeChange && !isLightTheme) return "#000"
        if (!hoveringThemeChange && isLightTheme) return "#000"
        if (!hoveringThemeChange && !isLightTheme) return "#fff"
    }

    const getSunBackgroundColor = () => {
        if (hoveringThemeChange && isLightTheme) return "#151613"
        if (hoveringThemeChange && !isLightTheme) return "#fff"
        if (!hoveringThemeChange && isLightTheme) return "#fff"
        if (!hoveringThemeChange && !isLightTheme) return "#151613"
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles["theme-control-container"]} style={{ backgroundColor: getSunBackgroundColor() }}>
                        <div
                            className={styles["icon-container"]}
                            onMouseEnter={() => setHoveringThemeChange(true)}
                            onMouseLeave={() => setHoveringThemeChange(false)}
                            onClick={() => {
                                if (isLightTheme) {
                                    toast.info('There you go! Dark mode.')
                                } else {
                                    toast.error('Light mode???? No.')
                                }
                                setIsLightTheme(!isLightTheme)

                            }}
                        >
                            <Sun fill={getSunColor()} />
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
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>

    )
}

export default Navbar