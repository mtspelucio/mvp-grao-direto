import React from 'react';
import { Container } from './styles';

export default function CardItem({ title, description, price, img }) {
  return (
    <Container id='item'>
        <img src={require(`../../img/restaurant-food/${img}.png`)} alt='Foto da comida' />
        <div>
            <h4>{ title }</h4>
            <p>{ description }</p>
            <span>R${ price }</span>
        </div>
    </Container>
  );
}