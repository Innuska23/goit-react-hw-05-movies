import { WrapHeader, NavLinkStyled } from './Header.styled';

const Header = () => (
    <WrapHeader>
        <nav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
        </nav>
    </WrapHeader>
);
export default Header;