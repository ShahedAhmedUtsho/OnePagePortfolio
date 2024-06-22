import  { createContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types'
export const AuthContext = createContext()
const Provider = ({children}) => {


    const [dark, setDark] = useState(() => {
        return localStorage.getItem("darkMode") === "true";
    });
    
    const handleMood = () => {
        setDark(!dark);
    };

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('darkMode', dark);
    }, [dark]);












const AuthShare = {dark, setDark,handleMood}
    return (
        <AuthContext.Provider value={AuthShare} >
            {children}
        </AuthContext.Provider>
    );
};



Provider.propTypes = {
    children : PropTypes.node
}

export default Provider;