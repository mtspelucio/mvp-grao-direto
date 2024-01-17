import React from 'react';
import Navbar from '../../components/Navbar';
import CardItem from '../../components/CardItem';
import { useParams } from 'react-router-dom';
import { Container } from './styles';
import { restaurantItems } from '../../db';
// import icon from '../../img/restaurant-icon/restaurante-sem-futuro.png'

export default function Restaurant() {

    const { id, name, foodDescription, imgIcon } = useParams('name');

  return (
    <Container>
        <Navbar name={"Fred"} address={"Av Leopoldinho de Oliveira"}/>

        <main className='content'>
            <header>
                <div className='icon'>
                    <img src={require(`../../img/restaurant-icon/${imgIcon}.png`)} alt='Icone' />
                </div>

                <div className='infoRestaurant'>
                    <p>{ name }</p>
                    <p>{ foodDescription }</p>
                </div>
            </header>

            <section className='contentFood'>
                <h1>Pratos</h1>
                <div className='items'>
                    
                    {
                        restaurantItems.map((element, index) => (
                            element.restaurantId === parseInt(id) & element.foodType === 'plate' ? (
            
                                <CardItem 
                                    key={index}
                                    title={element.title} 
                                    description={element.description} 
                                    price={element.price} 
                                    img={`plates/${element.img}`} 
                                />
                            ) : ( null )
                        ))
                    }
                </div>
                <h1>Bebidas</h1>
                <div className='items'>
                    {
                        restaurantItems.map((element, index) => (
                            element.restaurantId === parseInt(id) & element.foodType === 'drink' ? (
            
                                <CardItem 
                                    key={index}
                                    title={element.title} 
                                    description={element.description} 
                                    price={element.price} 
                                    img={`drinks/${element.img}`} 
                                />
                            ) : ( null )
                        ))
                    }
                    
                </div>
            </section>
        </main>
    </Container>
  );
}