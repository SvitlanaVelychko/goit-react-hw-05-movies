import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(NavLink)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    border-radius: ${p => p.theme.radii.normal};
    padding: ${p => p.theme.space[3]}px;
    border: ${p => p.theme.borders.normal};
    border-color: transparent;
    font-weight: 500;
    background-color: ${p => p.theme.colors.bgc};
    color: black;
    box-shadow: 0px 5px 5px rgba(16,1,0,0.7); 
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
;

    :hover, :focus {
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
        transform: scale(1.1);
    }
`;

export const MovieInfo = styled.div`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
`;

export const ImageWrapper = styled.div`
    flex-basis: 350px;
    flex-grow: 0;
    flex-shrink: 0;
    text-decoration: none;
    overflow: hidden;
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: 0px 5px 5px rgba(16,1,0,0.7);
`;

export const Content = styled.div`
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[4]}px;
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[5]}px;
`;

export const MovieName = styled.h1`
    font-size: ${p => p.theme.fontSizes.xl};
`;

export const MovieAddInfo = styled.h2`
    padding-bottom: ${p => p.theme.space[4]}px;
    padding-top: ${p => p.theme.space[4]}px;
`;

export const MovieAddList = styled.ul`
    display: flex;
    gap: ${p => p.theme.space[4]}px;
    list-style: none;
`;