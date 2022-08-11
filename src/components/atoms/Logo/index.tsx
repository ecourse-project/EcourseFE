import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
// import LogoIcon from 'assets/shared/logo.svg';
import queries from 'src/styles/breakpoints';
import React from 'react';
const StyledLink = styled(Link)`
	line-height: 1;
`;

const Wrapper = styled.div`
	width: 7.0625rem;
	svg {
		width: 100%;
		height: auto;
	}

	@media ${queries.laptopUp} {
		width: 10.625rem;
	}
`;

const Logo = (): JSX.Element => {
	return (
		<StyledLink to="/">
			<Wrapper>{/* <img src={} alt="Galleria Logo - home" /> */}</Wrapper>
		</StyledLink>
	);
};

export default Logo;
