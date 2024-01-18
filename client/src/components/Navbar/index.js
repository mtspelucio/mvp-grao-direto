import React from 'react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hook/useAuth';

import location from '../../img/pageUtils/location.svg';
import exit from '../../img/pageUtils/exit.svg';
import leftArrow from '../../img/pageUtils/left-arrow.svg';
// import arrow from '../../img/down-arrow.svg';

export default function Navbar({ page, name, address }) {

  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Container>
      {
        page === 'home' ? (
          <button
            onClick={() => [signout(), navigate('/')]}
          >
            Sair
            <img src={exit} alt='Icone sair' />
          </button>
        ) : (
          <button
            onClick={() => navigate(-1)}
          >
            <img src={leftArrow} alt='Icone sair' />
            Voltar
          </button>
        )
      }
      
      <div>
        <p>Olá! { name }, você está neste endereço</p>
        <span>
          <img src={location} alt='Icone localização' />
          <span>{ address }</span>
          {/* <img src={arrow} alt='Icone seta' /> */}
        </span>
      </div>
    </Container>
  );
}