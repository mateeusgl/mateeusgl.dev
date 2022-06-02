import styled from "styled-components";

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const Content = styled.div`
	max-width: 100%;
	margin: 0 auto;

	padding: 1.5rem 0;

	display: flex;
	align-items: center;
	gap: 8rem;

	p {
		color: var(--text);
	}

	section {
		img {
			border-radius: .8rem;
		width: 3rem;

		}

		a:not(:last-child) {
			margin-right: .8rem;
		}
	}
`