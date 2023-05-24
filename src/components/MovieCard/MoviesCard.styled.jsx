import styled from '@emotion/styled';
import {NavLink } from 'react-router-dom';

export const MovieArticle = styled.article`
    display: flex;
    gap: 20px;
    align-items: start;`;

export const CardUl = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
`;

export const MovieAbout = styled.span`
    font-weight: 300;
`;
export const LinkMovies = styled(NavLink)`
    color: grey;
    font-weight: 700;
    &.active,
    &:hover {
        color: red;
    }
    &:hover {
        text-decoration: underline;
    }
`;

