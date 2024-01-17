import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState();

    useEffect(() => {
        const userToken = localStorage.getItem('u_tk');
        const usersStorage = localStorage.getItem('us_db');

        if(userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                user => user.email === JSON.parse(userToken).email
            );

            hasUser && setUser(hasUser[0]);
        }
    }, [])

    const signin = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('us_db'));
        const hasUser = usersStorage?.filter(user => user.email === email);

        if(hasUser?.length) {
            if(hasUser[0].email === email && hasUser[0].password === password){
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem('u_tk', JSON.stringify({ email, token }));
                setUser({ email, password });
                return

            } else {
                return alert('E-mail ou senha incorretos')
            } 

        } else {
            return alert('Usuário não encontrado')
        }
    }

    const signup = (email, password) => {
        const usersStorage = JSON.parse(localStorage.getItem('us_db'));
        const hasUser = usersStorage?.filter( user => user.email === email);

        if(hasUser?.length) {
            return alert('Este e-mail está vinculado com uma conta');
        }

        let newUser;

        //increvendo usuario
        if(usersStorage) {
            newUser = [...usersStorage, { email, password }]
        } else {
            newUser = [{ email, password }];
        }

        localStorage.setItem('us_db', JSON.stringify(newUser));
        return
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