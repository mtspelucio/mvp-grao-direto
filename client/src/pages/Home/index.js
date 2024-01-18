import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from './styles';
import Navbar from '../../components/Navbar';
import CardRestaurant from '../../components/CardRestaurant';
import search from '../../img/pageUtils/search.svg'

export default function Home() {

    const [cards, setCards] = useState([]);
    const [restaurant, setRestaurants] = useState([]);

    const user = JSON.parse(localStorage.getItem('u_tk'));

    useEffect(() => {
        axios.get('http://localhost:3001/user/restaurant')
        .then(res => { setRestaurants(res.data) })
        .catch(err => { console.log(err.response.data.message) })
        
        const cardsRestaurant = document.querySelectorAll('.restaurants .cardRestaurant');
        setCards(cardsRestaurant);
    }, [])
    
    function filterCards(text) {
        if(text !== ''){
            for(let card of cards){

                let name = card.querySelector('h3');
                let description = card.querySelector('p');
                name = name.textContent.toLocaleLowerCase();
                description = description.textContent.toLocaleLowerCase();
                
                let filterText = text.toLocaleLowerCase();

                if(!name.includes(filterText)){
                    description.includes(filterText) ? 
                    card.style.display = 'block'
                    :
                    card.style.display = 'none';
                } else {
                    card.style.display = 'block'
                }
            }
        } else {
            for(let card of cards){
                card.style.display = 'block';
            }
        }     
    }
    
    return (
        <Container>
            <Navbar page={'home'} name={user.name} address={user.address}/>

            <main className='content'>
                <div className='search'>
                    <input type='text' placeholder='Pesquisar' onChange={text => filterCards(text.target.value)} />
                    <img src={search} alt='Icone de busca' />
                </div> 

                <section className='restaurants'>
                    
                    {
                        restaurant && (
                            restaurant.map((element, index) => (
                                <CardRestaurant 
                                    key={index}
                                    id={element.id}
                                    name={element.name} 
                                    phone={element.phone}
                                    address={element.address}
                                    foodType={element.food_type} 
                                    img={element.image}
                                    time={element.delivery_time}
                                    stars={element.stars}
                                    deliveryPrice={element.delivery_price}
                                />
                            ))
                        )
                    }
                </section>
            </main>
        </Container>
    );
}