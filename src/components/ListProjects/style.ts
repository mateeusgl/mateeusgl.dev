import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-bottom: 1px solid white;
`

export const Content = styled.div`
	max-width: 80%;
	
	padding: 1.5rem 0;

	h1 {
		font-weight: 600;
		letter-spacing: 1rem;
		margin-bottom: 1rem;
		
		background: -webkit-linear-gradient(100deg, greenyellow, #0a66c2);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
		text-align: center;
	}
	
	ul {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: .8rem;
		list-style: none;
	}
`