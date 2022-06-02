import { Container, Content } from './style'

export function Header() {
	return (
		<>
			<Container>
				<Content>
					<h1>Mateeusgl</h1>
					<ul>
						<li>
							<a href="https://github.com/mateeusgl" target="_blank">Github</a>
						</li>
						<li>
							<a href="https://twitter.com/mateeusgl" target="_blank">Twitter</a>
						</li>
						<li>
							<a href="https://github.com/mateeusgl?tab=repositories" target="_blank">Projetos</a>
						</li>
					</ul>
				</Content>
			</Container>
		</>
	)
}