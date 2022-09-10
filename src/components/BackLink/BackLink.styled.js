import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[4]}px;
    border: ${p => p.theme.borders.normal};
    border-color: transparent;
    border-radius: ${p => p.theme.radii.normal};
    font-weight: 500;
    background-color: ${p => p.theme.colors.bgc};
    color: black;
    box-shadow: 0px 5px 5px rgba(16,1,0,0.7); 
    text-decoration: none;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
        transform 250ms cubic-bezier(0.4, 0, 0.2, 1);;

    :hover, :focus {
        color: ${p => p.theme.colors.white};
        background-color: ${p => p.theme.colors.accent};
        transform: scale(1.1);
    }
`;