//import classes from './UI/Button/MyButton.module.css';
import React, { useState } from 'react';
import MyButton from './UI/Button/MyButton.jsx';
const ButtonPlaying = function() {
    let isPlaying = false
    const [status, setStatus] = useState(false)
    const [btn, setBtn] = useState('Play')

    function handleClick() {
            if(status){
                setBtn('Playing')
                setStatus(false);
            }
            else{
                setBtn('Play')
                setStatus(true);
            } 
    };

    return(
        <MyButton onClick={handleClick}>{btn}</MyButton>   
    );
};

export default ButtonPlaying;