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
		letter-spacing: 1rem;
		margin-bottom: 1rem;

		background: -webkit-linear-gradient(45deg, greenyellow, #0a66c2);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	ul {
		display: flex;
		justify-content: center;
		width: 80%;
		flex-wrap: wrap;
		gap: 1rem;
		list-style: none;

		margin-top: 1rem;

		li {
			display: flex;
			width: 8rem;
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 1rem;
			justify-content: space-between;
			background: linear-gradient(200deg, greenyellow, #0a66c2);
			border-radius: .8rem;
		}
	}
`