import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar';
import CardItem from '../../components/CardItem';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

export default function Restaurant() {

    const { id, name, phone, address, imgIcon } = useParams();
    const [menu, setMenu] = useState([]);

    const user = JSON.parse(localStorage.getItem('u_tk'));

    useEffect(() => {
        axios.get(`http://localhost:3001/user/restaurant/menu/${id}`)
        .then(res => { setMenu(res.data) })
        .catch(err => { console.log(err.response.data.message) })
    }, [id])

  return (
    <Container>
        <Navbar name={user.name} address={user.address}/>

        <main className='content'>
            <header>
                <div className='icon'>
                    <img src={require(`../../img/restaurant-icon/${imgIcon}.png`)} alt='Icone' />
                </div>

                <div className='infoRestaurant'>
                    <p>{ name }</p>
                    <p>Telefone: { phone }</p>
                    <p>Endereço: { address }</p>
                </div>
            </header>

            <section className='contentFood'>
                <h1>Pratos</h1>
                <div className='items'>
                    
                    {
                        menu && (
                            menu.map((element, index) => (
                                element.restaurant_id === parseInt(id) & element.food_type === 'plate' ? (
                                    <CardItem 
                                        key={index}
                                        title={element.title} 
                                        description={element.description} 
                                        price={element.price} 
                                        img={`plates/${element.image}`} 
                                    />
                                ) : null
                            ))
                        )
                    }
                </div>
                <h1>Bebidas</h1>
                <div className='items'>
                    {
                        menu && (
                            menu.map((element, index) => (
                                element.restaurant_id === parseInt(id) & element.food_type === 'drink' ? (
        
                                    <CardItem 
                                        id={element.id}
                                        key={index}
                                        title={element.title} 
                                        description={element.description} 
                                        price={element.price} 
                                        img={`drinks/${element.image}`} 
                                    />
                                ) : null
                            ))
                        )
                    }
                    
                </div>
            </section>
        </main>
    </Container>
  );
}