import styles from './Navbar.module.css'
import Sun from '../icons/Sun'
import { useState } from 'react'
import Image from 'next/image'

interface NavbarProps {
    lightMode: () => void,
    darkMode: () => void
}

const Navbar: React.FC<NavbarProps> = ({ lightMode, darkMode }) => {

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
                                    lightMode()
                                } else {
                                    darkMode()
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
        </>

    )
}

export default Navbar