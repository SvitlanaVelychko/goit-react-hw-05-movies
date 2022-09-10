import styled from "styled-components";

export const ReviewList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[4]}px;
`;

export const ReviewItem = styled.li`
    padding: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.normal};
    border-color: transparent;
    box-shadow: 0px 0px 7px 2px rgba(0,0,0,0.7) 
`;