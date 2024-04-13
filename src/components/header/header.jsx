import React, {useEffect} from 'react';
import Button from "../button/button";
import useTelegram from "../../hooks/useTelegram";
import './header.css'
const Header = () => {

const {onClose, user} = useTelegram()

    return (
        <div className='header'>
            <Button onClick={onClose}>Закрыть</Button>
            <span className='username'>{user?.first_name}</span>

        </div>
    );
};

export default Header;