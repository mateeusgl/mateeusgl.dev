import styles from './Projects.module.css'

type ProjectsProps = {
	"projects": {
		img?: string;
		title: string;
		description: string;
		url: string
	}[]
}

export function Projects({ projects }:ProjectsProps) {
	return (
		<div className={styles.container}>
			{projects.map(({ description, title, url }) => (
				<article key={title} className={styles.project}>
					<a href={url} target="_blank">
						<div>
							<p>Project</p>
						</div>
						<h3>{title}</h3>
						<p>{description}</p>
					</a>
				</article>
			))}	
		</div>
	)
}