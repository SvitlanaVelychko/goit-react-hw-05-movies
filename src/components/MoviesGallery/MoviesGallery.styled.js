import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: ${p => p.theme.space[4]}px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const MovieItem = styled.li`
    border-radius: ${p => p.theme.radii.normal};
`; 

export const Card = styled(Link)`
    display: block;
    height: 100%;
    text-decoration: none;
    overflow: hidden;
    border-radius: ${p => p.theme.radii.normal};
    box-shadow: 0px 5px 5px rgba(16,1,0,0.7); 
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
    
    :hover, :focus {
        transform: scale(1.03);
        box-shadow: 0px 10px 10px rgba(16,1,0,0.7); 
    }
`;