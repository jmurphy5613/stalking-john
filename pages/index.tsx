import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Grid from '@/components/grid/Grid'


export default function Home() {
	return (
		<>
			<Navbar />
			<div className={styles.container}>
				<h1 className={styles["main-title"]}>
					{"hey, here's my life."}
				</h1>
				<h3 className={styles.description}>
					let’s be real, instagram is chalked, so i made my own.
				</h3>
				<Grid />
			</div>
		</>
	)
}
