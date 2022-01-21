import { useNavigate } from "react-router-dom";
import { HomeContainer } from "./style";

const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeContainer>
      <h2>
        Seja bem-vindo a plataforma para cadastro, consulta, atualização e
        exclusão de indexadores
      </h2>
      <h2>O que gostaria de fazer?</h2>
      <div className="options">
        <h3 onClick={() => navigate("/register")}>Registrar novo indexador</h3>
        <h3 onClick={() => navigate("/indexers")}>
          Consultar lista de indexadores
        </h3>
      </div>
    </HomeContainer>
  );
};
export default Home;
