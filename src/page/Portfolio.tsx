import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import data from '../../data.json'

import '../styles/global.css'
import styles from './Portfolio.module.css'

export function Portfolio() {
	return (
		<div className={styles.portfolio}>
			<aside className={styles.aside}>
				<AboutMe about={data.about}/>
			</aside>
			<main className={styles.main}>
				<Projects projects={data.project}/>
			</main>
		</div>
	)
}