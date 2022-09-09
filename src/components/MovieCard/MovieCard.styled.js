import styled from "styled-components"; 

export const MovieCardImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`;

export const MovieCardContent = styled.div`
    width: 100%;
    padding: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.tailwind};
    color: ${p => p.theme.colors.black};
    background-color: ${p => p.theme.colors.white};
`;

export const MovieCardTitle = styled.p`
    margin-bottom: ${p => p.theme.space[2]}px;
`;

export const MovieRating = styled.span`
    color: ${p => p.theme.colors.accent};
`;