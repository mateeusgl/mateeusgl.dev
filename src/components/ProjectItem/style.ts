import styled from "styled-components";

export const Content = styled.li`
	width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 3rem 1rem;
	background: linear-gradient(45deg, greenyellow, #0a66c2);
	border-radius: 0.8rem;

	h2 {
		color: var(--title);
		margin-bottom: 1rem;
	}

	p {
		margin-bottom: 1rem;
	}
`