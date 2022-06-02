import { Container, Content } from "./style";

export function Home(){
	return (
		<Container>
			<Content>
				<img src="https://github.com/mateeusgl.png" alt="Foto de Matheus Lopes" />
				<p>Olá, aqui é o <br /><span>Mateus Lopes.</span><br /> Desenvolvedor front-end</p>
				<a href="https://linkedin.com/in/mateeusgl" target="_blank">Linkedin</a>
			</Content>
		</Container>
	)
}