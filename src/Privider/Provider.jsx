import  { createContext } from 'react';

import PropTypes from 'prop-types'
export const AuthContext = createContext()
const Provider = ({children}) => {
const AuthShare = {}
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