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

	img {
		width: 18.75rem;
		border-radius: 50%;
		margin-bottom: 2rem;
	}

	p {
		color: white;
		text-align: center;
		line-height: 2.6rem;
		font-size: 1.5rem;
		margin-bottom: 1rem;

		
		span {
			font-size: 4.16rem;
			background: -webkit-linear-gradient(80deg, greenyellow, #0a66c2);
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
		}

	}

	a {
		display: flex;
		justify-content: center;
		align-items: center;
		background: greenyellow;
		
		width: 80%;
		height: 5rem;
		border-radius: 5rem;

		font-size: 2rem;
		text-decoration: none;
		letter-spacing: 0.25rem;
		color: #0a66c2;

		transition: color 2ms;

		&:hover {
			background: #0a66c2;
			color: greenyellow;
		}
	}
`