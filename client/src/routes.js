import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import useAuth from './hook/useAuth';

import Home from './pages/Home';
import Login from './pages/Login';
import Restaurant from './pages/Restaurant';
import Register from './pages/Register';

const PrivateRoute = ({ children }) => {
    const { signed } = useAuth();
    return signed ? children : <Login />
}

export default function Routes() {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' element={<Login />} />
            <Route async 
                path='/home' 
                element={ 
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute> 
                }
            />
            <Route async 
                path='/restaurant/:id/:name/:phone/:address/:foodDescription/:imgIcon' 
                element={ 
                    <PrivateRoute>
                        <Restaurant />
                    </PrivateRoute> 
                }
            />
            <Route exact path='/register' element={<Register />} />
            <Route path='*' element={<Login />} />
        </Switch>
    </BrowserRouter>
  );
}