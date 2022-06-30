import { Container, Content } from './style'

export function Header() {
	return (
		<>
			<Container>
				<Content>
					<h1>Mateeusls</h1>
					<ul>
						<li>
							<a href="https://github.com/mateeusls" target="_blank">Github</a>
						</li>
						<li>
							<a href="https://twitter.com/mateeusls" target="_blank">Twitter</a>
						</li>
						<li>
							<a href="https://github.com/mateeusls?tab=repositories" target="_blank">Projetos</a>
						</li>
					</ul>
				</Content>
			</Container>
		</>
	)
}