import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Container } from './styles';
import image from '../../img/login.jpg';
import logo from '../../img/open-mouth.png';
import enter from '../../img/enter.svg';

export default function Login() {
    const navigate = useNavigate();

    return (
        <Container>
            <img className='background-img' src={image} alt='Banner comida'/>
            <main className='content'>
                <div className='banner'>
                    <p>Quem tem</p>
                    <img src={logo} alt='Icone boca'/>
                    <p>tem FOME</p>
                </div>
                
                <section>
                    <p className='subtitle'>Acesse seus restaurantes prediletos</p>
                    <form >
                        <input type='text' placeholder='E-mail' />
                        <input type='password' placeholder='Senha'/>

                        <button onClick={() => navigate('/home')}>
                            <img src={enter} alt='Icone boca'/>
                            Entrar
                        </button>
                    </form>
                    <a href='www.google.com'>Esqueci minha senha</a>
                    <p>Não tem conta? <a href='www.google.com'>Cadastre-se</a></p>
                </section>
            </main>
        </Container>
      );
}