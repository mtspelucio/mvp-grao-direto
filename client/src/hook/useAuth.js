import { useContext } from 'react';
import { AuthContext } from '../auth';

export default function useAuth() {
    const context = useContext(AuthContext);
    return context;
}