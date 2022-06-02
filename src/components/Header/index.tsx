import { Container, Content } from './style'

export function Header() {
	return (
		<>
			<Container>
				<Content>
					<h1>Mateeusgl</h1>
					<ul>
						<li>
							<a href="#">Início</a>
						</li>
						<li>
							<a href="#">Sobre mim</a>
						</li>
						<li>
							<a href="#">Projetos</a>
						</li>
						<li>
							<a href="#">Habilidades</a>
						</li>
					</ul>
				</Content>
			</Container>
		</>
	)
}