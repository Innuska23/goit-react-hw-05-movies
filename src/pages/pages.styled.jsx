import styled from '@emotion/styled';
import {BsSearch} from 'react-icons/bs';

export const ContainerDetails = styled.div`
    display: flex;

`;

export const MoviesInput = styled.input`
    background-color: rgb(237, 242, 247);
    border-radius: 10px;
    font-size: 20px;
`;

export const PagesStyle = styled.div`
    padding: 0 20px;
`;

export const SeachtIcon = styled(BsSearch)`
    width: 25px;
    height: 25px;
    display: inline-block;
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
`;

export const SeachText = styled.p`
    color: gray;
    font-weight: 700;
    text-transform: uppercase;
`;

