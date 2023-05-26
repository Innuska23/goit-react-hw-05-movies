import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';

export const MovieWraper = styled.div`
    margin-top: 10px;
`;

export const MovieArticle = styled.article`
    display: flex;
    gap: 20px;
    align-items: start;
    margin-bottom: 20px
`;

export const CardUl = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
    padding: 0;
    margin-bottom: 20px;
`;

export const MovieAbout = styled.span`
    font-weight: 300;
`;

export const LinkMovies = styled(NavLink)`
    display: flex;
    font-weight: 700;
    text-transform: uppercase;
    align-items: center;
    border-bottom: 3px solid transparent;
    &.active,
    &:hover {
        color: #FED36A;
    }
    &:hover {
        border-bottom: 3px solid #FED36A;
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

export const СardMovieText = styled.p`
    color: #FED36A;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 20px
`;

export const СardInfoMovie = styled.p`
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 20px;
    margin-top: 20px;
`;

export const MovieBack = styled.div`
    display: flex;
    margin-bottom: 5px;
    `;

export const MovieInfo = styled.h3`
    margin-bottom: 20px;
`;

export const MovieName = styled.h2`
    margin-bottom: 20px;
`;
