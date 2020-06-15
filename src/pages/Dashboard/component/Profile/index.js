import React, {useContext} from 'react';

import Contexto from '../../../../contexto'
import './styles.css';

const Profile = () => {

    const {usuario, numero} = useContext(Contexto);

    console.log(usuario)

    return (
        <>
            <h1>Page Profile</h1>
            <h2>{usuario}</h2>
            <span>{numero}</span>
        </>
    );

};

export default Profile;