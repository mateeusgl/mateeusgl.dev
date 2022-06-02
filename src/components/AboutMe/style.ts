import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	border-bottom: 1px solid white;
`

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	padding: 1.5rem 0;

	display: flex;
	flex-direction: column;
	align-items: center;

	h1 {
		letter-spacing: 1.25rem;
		margin-bottom: 1rem;

		background: -webkit-linear-gradient(45deg, greenyellow, #0a66c2);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	p {
		width: 80%;
		color: var(--text);
		font-size: 1.2rem;
		line-height: 2rem;

		& + p {
			margin: 1rem 0;
		}
	}
`