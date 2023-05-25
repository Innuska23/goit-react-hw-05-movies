import styled from '@emotion/styled';

export const CastUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 40px;
`;
export const CastLi = styled.li`
    margin-bottom: 20px;
    word-wrap: break-word;
    ${'' /* width: calc((100% - 4 * 30px) / 5); */}
`;
export const CastText = styled.p`
    text-align: center;
    align-items: center; 
    word-wrap: break-word;`;