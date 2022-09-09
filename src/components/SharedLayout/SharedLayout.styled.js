import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: start;
    padding-right: ${p => p.theme.space[4]}px;
    padding-left: ${p => p.theme.space[4]}px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);
`;

export const Navigation = styled.nav`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
`;

export const Link = styled(NavLink)`
    padding-top: ${p => p.theme.space[4]}px;
    padding-bottom: ${p => p.theme.space[4]}px;
    text-decoration: none;
    font-weight: ${p => p.theme.fontWeights.bold};
    color: ${p => p.theme.colors.black};
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &.active {
        color: ${p => p.theme.colors.accent};
        transform: scale(1.1);
    }
`;