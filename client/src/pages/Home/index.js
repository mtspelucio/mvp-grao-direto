import React from 'react';
import { Container } from './styles';
import Navbar from '../../components/Navbar';
import CardRestaurant from '../../components/CardRestaurant';
import { restaurant } from '../../db';
import search from '../../img/search.svg'


export default function Home() {
    
    const cards = document.querySelectorAll('.restaurants .cardRestaurant')

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
            <Navbar name={"Fred"} address={"Av Leopoldinho de Oliveira"}/>

            <main className='content'>
                <div className='search'>
                    <input type='text' placeholder='Pesquisar' onChange={text => filterCards(text.target.value)} />
                    <img src={search} alt='Icone de busca' />
                </div> 

                <section className='restaurants'>
                    
                    {
                        restaurant.map((element, index) => (
                            <CardRestaurant 
                                key={index}
                                id={element.id}
                                name={element.name} 
                                foodType={element.foodType} 
                                img={element.img}
                                time={element.time}
                                stars={element.stars}
                                deliveryPrice={element.price}
                            />
                        ))
                    }
                </section>
            </main>
        </Container>
    );
}