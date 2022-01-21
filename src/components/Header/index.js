import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link>
      <Link to="/register">Registrar indexador</Link>
      <Link to="/indexers">Lista de indexadores</Link>
    </HeaderContainer>
  );
};
export default Header;
