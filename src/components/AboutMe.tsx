import styles from './AboutMe.module.css'
import { Social } from './Social'
import data from '../../data.json'

interface AboutMeProps {
	about: {
		img: string;
		title: string;
		paragraphOne: string;
		paragraphTwo?: string;
	}
}

interface SkillsProps {
	skills: {
		name: string
	}[]
}

export function AboutMe({ about }: AboutMeProps, { skills }: SkillsProps) {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<div className={styles.avatar}>
					<span>
						<img src={about.img} alt="Imagem de Mateus Lopes" />
					</span>
				</div>
				<h1>Hi, I'm <br/> {about.title}</h1>
				<div>
					<p>{about.paragraphOne}</p>
					
				</div>
			</div>

			<Social social={data.socials}/>
		</div>
	)
}