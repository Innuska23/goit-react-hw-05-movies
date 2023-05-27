import styled from '@emotion/styled';

export const CastWraper = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
`;

export const CastUl = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    gap: 40px;
    padding: 0;
`;

export const CastLi = styled.li`
    margin-bottom: 20px;
    word-wrap: break-word;
    width: calc((100% - 4 * 40px) / 5);
`;

export const CastInfo = styled.div`
    margin-top: 20px;
`;

export const CastText = styled.p`
    text-align: center;
    align-items: center; 
    word-wrap: break-word;
    margin-bottom: 10px;
`;

export const CastImg = styled.img`
    border-radius: 5px;
    filter: drop-shadow(9px 5px 10px #000);
`;

    export const CastSent = styled.p`
    color: #FED36A
`;
