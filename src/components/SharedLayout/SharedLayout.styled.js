import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
    padding: ${p => p.theme.space[4]}px;
    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.black};

    &.active {
        color: ${p => p.theme.colors.accent};
    }
`;