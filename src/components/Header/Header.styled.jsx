import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const WrapHeader = styled.header`
    padding: 20px 30px;
    margin-bottom: 20px;
    z-index: 1000;
    -webkit-box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
    -moz-box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
    box-shadow: 0px 11px 15px -8px rgba(66, 68, 90, 1);
`;

export const NavLinkStyled = styled(NavLink)`
    display: inline-block;
    font-size: 24px;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
    color: grey;
    &:not(:last-child) {
    margin-right: 30px;
    }
    &.active,
    &:hover {
    color: red;
    }
    &:hover {
        text-decoration: underline;
    }
`;