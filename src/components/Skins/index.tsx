import { Container, Content } from "./style";

const skins = [
	{
		image_url: "https://ymatheusvieira.vercel.app/assets/img/html2.svg",
		name: "HTML"
	},
	{
		image_url: "https://ymatheusvieira.vercel.app/assets/img/css2.svg",
		name: "CSS"
	},
	{
		image_url: "https://ymatheusvieira.vercel.app/assets/img/js2.svg",
		name: "Javascript"
	},
	{
		image_url: "https://ymatheusvieira.vercel.app/assets/img/react2.svg",
		name: "ReactJs"
	},
	{
		image_url: "https://ymatheusvieira.vercel.app/assets/img/github2.svg",
		name: "Github"
	},
	{
		image_url: "https://ymatheusvieira.vercel.app/assets/img/git2.svg",
		name: "Git"
	},
	{
		image_url: "https://ymatheusvieira.vercel.app/assets/img/styled\ 2.svg",
		name: "Styled-components"
	},
]

export function Skins() {
	return (
		<Container>
			<Content>
				<h1>Habilidades</h1>
				<ul>
					{skins.map(skin => (
						<li>
							<img src={skin.image_url} alt={skin.name} />
							<p>{skin.name}</p>
						</li>
					))}
				</ul>
			</Content>
		</Container>
	)
}