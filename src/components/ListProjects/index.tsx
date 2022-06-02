import { useEffect, useState } from "react";
import { ProjectItem } from "../ProjectItem";
import { Container, Content } from "./style";

interface Repository {
	name: string,
	description: string,
	html_url: string
}

export function ListProjects() {
	const [repositories, setRepositories] = useState<Repository[]>([])

	useEffect(() => {
		const repos = async () => {
			await fetch("https://api.github.com/users/mateeusgl/repos")
			.then(response => response.json())
			.then(data => setRepositories(data))
		}

		repos()
	}, [])

	return (
		<Container>
			<Content>
				<h1>Projetos</h1>
				<ul>
					{repositories.map(repository => {
						return <ProjectItem key={repository.name} repository={repository}/>
					})}
				</ul>
			</Content>
		</Container>
	)
}