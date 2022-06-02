import styled from "styled-components";

export const Container = styled.header`
	background: var(--header);
	border-bottom: 1px solid white;
`

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	padding: 1rem 1rem ;
	display: flex;
	align-items: center;
	justify-content: space-between;


	h1 {
		background: -webkit-linear-gradient(100deg, greenyellow, #0a66c2);
		background-clip: text;
		-webkit-background-clip: text;
		color: transparent;
	}

	ul {
		display: flex;
		list-style: none;

		a {
			font-size: 1.16rem;
			text-decoration: none;
			color: var(--text);

			transition: color 2ms;
		}

		a:hover {
			background: -webkit-linear-gradient(45deg, greenyellow, #0a66c2);
			background-clip: text;
			-webkit-background-clip: text;
			color: transparent;
		}

		li:not(:last-child) {
			margin-right: 1rem;
		}
	}
`