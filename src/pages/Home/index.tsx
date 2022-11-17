import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <div>
        <h1>Desafio Github API</h1>
      </div>

      <div className="text-h6">
        <h6>Bootcamp Spring React - DevSuperior</h6>
      </div>

      <Link to="/cepsearch">
        <button className="btn btn-primary btn-lg start-button">Começar</button>
      </Link>
    </div>
  );
};

export default Home;
