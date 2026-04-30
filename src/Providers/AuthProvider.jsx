import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, name) => {
        setLoading(true);
        return axios.post('http://localhost:9000/users/register', { email, password, name })
            .then(res => {
                if(res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setUser(res.data.user);
                }
                setLoading(false);
                return res;
            });
    };

    const signIn = (email, password) => {
        setLoading(true);
        return axios.post('http://localhost:9000/users/login', { email, password })
            .then(res => {
                if(res.data.token) {
                    localStorage.setItem('access-token', res.data.token);
                    setUser(res.data.user);
                }
                setLoading(false);
                return res;
            });
    };

    const logOut = () => {
        setLoading(true);
        localStorage.removeItem('access-token');
        setUser(null);
        setLoading(false);
        return Promise.resolve();
    };

    useEffect(() => {
        const token = localStorage.getItem('access-token');
        if(token) {
            axios.get('http://localhost:9000/users/me', {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => {
                setUser(res.data.user);
                setLoading(false);
            })
            .catch(() => {
                localStorage.removeItem('access-token');
                setUser(null);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;