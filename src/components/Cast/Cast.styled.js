import styled from "styled-components";

export const CastList = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: ${p => p.theme.space[4]}px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;

export const CastItem = styled.li`
    border-radius: ${p => p.theme.radii.normal};
    border-color: transparent;
    font-weight: 500;
    background-color: ${p => p.theme.colors.white};
    color: black;
    box-shadow: 0px 5px 5px rgba(16,1,0,0.7); 
`;

export const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const CastInfo = styled.p`
    padding: ${p => p.theme.space[3]}px;
    text-align: center;
`;