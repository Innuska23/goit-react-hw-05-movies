import styled from '@emotion/styled';

export const ListWraper = styled.div`
    display: flex;
`;

export const ListOfMovies = styled.ol`
    padding: 30px;
    text-decoration: none;
`;
export const ListLi = styled.li`
    margin-bottom: 5px;
    text-decoration: none;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
        text-decoration-color: gray;
    }
`