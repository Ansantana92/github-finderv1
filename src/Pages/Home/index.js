import { useState } from 'react';
import axios from "axios";
import React from 'react';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

function App(props) {
  const navigate = useNavigate();
  const [ usuario, setUsuario ] = useState('');
  const [ erro, setErro ] = useState (false);
  
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repositories) => {
        repositoriesName.push(repositories.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      navigate('/repositories');
    })
    .catch( err =>{
      setErro(true);
    });
  };
  return (
    <>
      <S.Container>
        <S.Title>Github Finder do Andrei</S.Title>
        <S.Content>
          <S.Input className="usuario" placeholder="Usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
          <S.Button type="S.Button" onClick={handlePesquisa}>Pesquisar</S.Button>
        </S.Content>
        {erro ? <S.ErrorMessage>Ocorreu um erro. Tente Novamente.</S.ErrorMessage> : ''}
      </S.Container>
      <S.Footer>Created by Ansantana92</S.Footer>
    </>
  );
}

export default App;