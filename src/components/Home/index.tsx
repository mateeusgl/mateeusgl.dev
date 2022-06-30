import { useEffect, useState } from "react";
import { Container, Content } from "./style";

interface UserAvatar {
	avatar_url: string
}


export function Home(){
	const [useAvatar, setUseAvatar] = useState<UserAvatar>()

	useEffect(() => {
		const user = async () => {
			await fetch("https://api.github.com/users/mateeusls")
			.then(response => response.json())
			.then(data => setUseAvatar(data))
		}

		user()
	}, [])
	return (
		<Container>
			<Content>
				<img src={useAvatar?.avatar_url} alt="Foto de Matheus Lopes" />
				<p>Olá, aqui é o <br /><span>Mateus Lopes.</span><br /> Desenvolvedor front-end</p>
				<a href="https://linkedin.com/in/mateeusgl" target="_blank">Linkedin</a>
			</Content>
		</Container>
	)
}