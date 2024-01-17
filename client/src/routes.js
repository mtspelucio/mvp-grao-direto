import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import useAuth from './hook/useAuth';

import Home from './pages/Home';
import Login from './pages/Login';
import Restaurant from './pages/Restaurant';

const PrivateRoute = ({ children }) => {
    const { signed } = useAuth();
    return signed > 0 ? children : <Login />
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
                path='/restaurant/:id/:name/:foodDescription/:imgIcon' 
                element={ 
                    <PrivateRoute>
                        <Restaurant />
                    </PrivateRoute> 
                }
            />
            <Route path='*' element={<Login />} />
        </Switch>
    </BrowserRouter>
  );
}