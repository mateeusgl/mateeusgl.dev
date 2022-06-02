import { Content } from "./style";

interface ProjectItemProps {
	repository: {
		name: string,
		description: string,
		html_url: string
	}
}

export function ProjectItem(props: ProjectItemProps) {
	return (
		<Content>
			<h2>{props.repository.name}</h2>
			<p>{props.repository.description}</p>
			<a href={props.repository.html_url} target="_blank">Acesse o projeto</a>
		</Content>
	)
}