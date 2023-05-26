import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

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
    display: flex;
    color: grey;
    font-weight: 700;
    text-transform: uppercase;
    text-shadow: 1px 1px 2px pink;
    align-items: center;
    &.active,
    &:hover {
        color: red;
    }
    &:hover {
        text-decoration: underline;
    }
`;

export const LeftIcon = styled(BsArrowLeftShort)`
    width: 25px;
    height: 25px;
    display: inline-block;
`;
export const CardMovieImg = styled.img`
border-radius: 5px;
filter: drop-shadow(9px 5px 10px #000);
`;