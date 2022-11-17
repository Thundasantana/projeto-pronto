import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';
import './styles.css';

type FormData = {
  cep: string;
};

type Address = {
  url: string;
  followers: string;
  location: string;
  name: string;
};

const CepSearch = () => {
  const [address, setAddress] = useState<Address>();

  const [formData, setFormData] = useState<FormData>({
    cep: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios

      .get(`https://api.github.com/users/acenelio`)
      .then((response) => {
        setAddress(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setAddress(undefined);
        console.log(error);
      });
  };

  return (
    <div className="cep-search-container">
      <div className="container search-container">
        <h1 className="text-primary">Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="cep"
              value={formData.cep}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="container-info">
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/13897257?v=4"
            alt=""
          />
        </div>
        <div className="container-info-box">
          <div className="content-info">Informações</div>
          {address && (
            <>
              <div className="info-box">
                <ResultCard title="Perfil:"description={address.url} />
                <ResultCard title="Seguidores:"description={address.followers} />
                <ResultCard title="Localidade:"description={address.location} />
                <ResultCard title="Nome:" description={address.name} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CepSearch;
