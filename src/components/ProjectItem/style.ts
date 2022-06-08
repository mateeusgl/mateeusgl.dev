import styled from "styled-components";

export const Content = styled.li`
	width: 12.5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 3rem 1rem;
	background: linear-gradient(100deg, greenyellow, #0a66c2);
	border-radius: 0.8rem;


	h2 {
		color: var(--title);
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 1rem;
	}

	a {
		text-decoration: none;
		color: #0a66c2;
		
		&:hover {
			color: greenyellow;
		}
	}
`