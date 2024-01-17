import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from './styles';
import useAuth from '../../hook/useAuth';

import image from '../../img/pageUtils/register.jpg';
import logo from '../../img/pageUtils/open-mouth.png';

export default function Register() {
    const navigate = useNavigate();
    const { signup } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    async function HandleSignup(e) {
        e.preventDefault();
        if(!name || !email || !password || !address){
            alert('Preencha todos os campos');
            return
        } 

        await signup(name, email, password, address)
        navigate('/');
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
                <form >
                    <input type='text' placeholder='Primeiro nome' onChange={text => setName(text.target.value)}/>
                    <input type='text' placeholder='E-mail' onChange={text => setEmail(text.target.value)}/>
                    <input type='password' placeholder='Senha' onChange={text => setPassword(text.target.value)}/>
                    <input type='text' placeholder='Endereço' onChange={text => setAddress(text.target.value)}/>

                    <button onClick={HandleSignup}>
                        Criar conta
                    </button>
                </form>
                <p>Já tem uma conta? <Link to='/'>Entre</Link></p>
            </section>
        </main>
    </Container>
  );
}