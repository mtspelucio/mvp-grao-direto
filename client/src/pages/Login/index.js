import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Container } from './styles';
import useAuth from '../../hook/useAuth';

import image from '../../img/pageUtils/login.jpg';
import logo from '../../img/pageUtils/open-mouth.png';
import enter from '../../img/pageUtils/enter.svg';

export default function Login() {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        if(!email || !password){
            alert('Preencha todos os campos');
            return
        }

        await signin(email, password);
        navigate('/home');
    }

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
                        <input type='text' placeholder='E-mail' onChange={text => setEmail(text.target.value)}/>
                        <input type='password' placeholder='Senha' onChange={text => setPassword(text.target.value)}/>

                        <button onClick={handleLogin}>
                            <img src={enter} alt='Icone boca'/>
                            Entrar
                        </button>
                    </form>
                    <a href='www.google.com'>Esqueci minha senha</a>
                    <p>Não tem conta? <Link to='/register'>Cadastre-se</Link></p>
                </section>
            </main>
        </Container>
      );
}