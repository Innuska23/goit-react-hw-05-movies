import styled from '@emotion/styled';
import {BsSearch} from 'react-icons/bs';

export const ContainerDetails = styled.div`
    display: flex;

`;

export const MoviesInput = styled.input`
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 12px;
    gap: 4px;
    width: 100%;
    height: 32px;
    background: #455A64;
    border: none;
    color: #fff;
    outline-with: 1.75;
    outline-color: #455A64;

    outline-style: solid;
    border-radius: 4px;
    &:hover,
    &:focus,
    &:focus-visible {
        outline-color: #FED36A;
        border: none;
    }
`;
export const MoviesLabel = styled.label`
    position: relative;
    display: block;
    width: 212px;;
`;

export const PagesStyle = styled.div`
    padding: 0 20px;
`;

export const SeachtIcon = styled(BsSearch)`
    width: 20px;
    height: 20px;
    display: inline-block;
    fill: #FED36A;
    &:hover,
    &:focus{
        fill: #fff;
`;

export const SeachButton = styled.button`
    display: inline-block;
    width: 40px;
    border: 0px;
    height: 40px;
    background-color: inherit;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
    cursor: pointer;
    margin-left: 5px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
`;

export const SeachText = styled.p`
    margin-top: 40px;
    color: gray;
    font-weight: 700;
    text-transform: uppercase;
    color: #FED36A;
`;

export const MovieList = styled.h2`
    margin-top: 20px
`;
