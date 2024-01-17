import React from 'react';
import { Container } from './styles';
import location from '../../img/location.svg';
// import arrow from '../../img/down-arrow.svg';

export default function Navbar({ name, address }) {
  return (
    <Container>
        <p>Olá! { name }, você está neste endereço</p>
        <span>
            <img src={location} alt='Icone localização' />
            { address }
            {/* <img src={arrow} alt='Icone seta' /> */}
        </span>
    </Container>
  );
}