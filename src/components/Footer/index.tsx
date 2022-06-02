import { Container, Content } from "./style";

export function Footer() {
	return (
		<Container>
			<Content>
				<p>Criado por Matheus Lopes 💚</p>

				<section>
					<a href="https://github.com/mateeusgl" target="_blank">
						<img src="https://ymatheusvieira.vercel.app/assets/img/github2.svg" alt="Github logo" />
					</a>
					<a href="https://twitter.com/mateeusgl" target="_blank">
						<img src="https://testistanbul.org/wp-content/uploads/2020/10/twitter-icon.png" alt="Twitter logo" />
					</a>
				</section>
			</Content>
		</Container>
	)
}