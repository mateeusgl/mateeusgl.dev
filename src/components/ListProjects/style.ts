import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	border-bottom: 1px solid white;
`

export const Content = styled.div`
	max-width: 100%;
	margin: 0 auto;

	padding: 1.5rem 0;

	h1 {
		font-weight: 600;
		letter-spacing: 1.25rem;
		margin-bottom: 1rem;
		
		background: -webkit-linear-gradient(100deg, greenyellow, #0a66c2);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		text-align: center;
	}
	
	ul {
		list-style: none;
		height: 400px;
		display: grid;
		grid-template-columns: repeat(3, 180px);
		gap: .8rem;

		li {
			text-align: center;
			padding: 5rem 0;
			background: linear-gradient(45deg, greenyellow, #0a66c2);
		}
	}
`