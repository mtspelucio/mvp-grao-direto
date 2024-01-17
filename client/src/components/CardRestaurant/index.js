import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom'

import star from '../../img/pageUtils/star.svg';
import timer from '../../img/pageUtils/timer.svg';
import delivery from '../../img/pageUtils/delivery.svg';

export default function CardRestaurant({ name, phone, address, foodType, stars, time, deliveryPrice, onClick, img, id }) {

  return (
    <Link to={`/restaurant/${id}/${name}/${phone}/${address}/${foodType}/${img}`}>
    <Container
        onClick={onClick}
        id='item'
        className='cardRestaurant'
    >
        <img src={require(`../../img/restaurant-cover/${img}.jpg`)} alt='Foto de capa' />
        <section>
            <div className='icon'>
                <img src={require(`../../img/restaurant-icon/${img}.png`)} alt='Icone' />
            </div>
            
            <div className='details'>
                <h3>{ name }</h3>
                <p>{ foodType }</p>

                <div className='info'>
                    <div>
                        <img src={ star } alt='Icone' />
                        { stars }
                    </div>
                    <div>
                        <img src={ timer } alt='Icone' />
                        { time } min
                    </div>
                    <div>
                        <img src={ delivery } alt='Icone' />
                        { deliveryPrice }
                    </div>
                </div>
            </div>
        </section>
    </Container>
    </Link>
  );
}