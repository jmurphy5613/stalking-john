import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Grid from '@/components/grid/Grid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

	const darkTheme = () => toast.info('Light mode???? No.')	        
	const lightTheme = () => toast.info('There you go! Dark mode.')

	return (
		<>
			<Navbar lightMode={lightTheme} darkMode={darkTheme} />
			<div className={styles.container}>
				<h1 className={styles["main-title"]}>
					{"hey, here's my life."}
				</h1>
				<h3 className={styles.description}>
					let’s be real, instagram is chalked, so i made my own.
				</h3>
				<Grid />
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
