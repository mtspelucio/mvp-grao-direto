import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('u_tk');

        if(userToken) {
            const { token } = JSON.parse(userToken);
            
            axios.post('http://localhost:3001/user/token', { token })
            .then(res => {
                localStorage.setItem('u_tk', JSON.stringify(res.data));
                setUser(res.data)
                return
            })
            .catch(err => { return alert(err.response.data.message) })
        }
    }, []);

    const signin = async (email, password) => {
        await axios.post('http://localhost:3001/user/login', {
            email,
            password,
        })
        .then(res => {
            localStorage.setItem('u_tk', JSON.stringify(res.data));
            setUser(res.data)
            return
        })
        .catch(err => { return alert(err.response.data.message) })
    }

    const signup = async (name, email, password, address) => {

        await axios.post('http://localhost:3001/user', {
            name,
            email,
            password,
            address
        })
        .then(res => {
            localStorage.setItem('u_tk', JSON.stringify(res.data));
            setUser(res.data)
            return alert('Usuário cadastrado com sucesso!');
        })
        .catch(err => { return alert(err.response.data.message) })
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem('u_tk');
    }

    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signout, signup }}
        >
            { children }
        </AuthContext.Provider>
    )
}