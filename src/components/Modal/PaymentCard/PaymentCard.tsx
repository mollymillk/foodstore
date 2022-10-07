import React, { useEffect, useRef, useState } from 'react';
import './PaymentCard.sass';
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setCard } from '../../../store/reducers/orderInfoReducer';


export const PaymentCard = () => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState("");
  
    useEffect(() => {
      ref.current.focus();
    }, []);

    const dispatch = useDispatch();

    const handleSendCard = () => {
        const lastNumbers = number.substring(12);
        dispatch(setCard(lastNumbers));
    }
  
    const ref = useRef(null);
    return (
      <div className="payment_card">
        <Cards
          number={number}
          name={name}
          expiry={expiry}
          cvc={cvc}
          focused={focus}
        />
        <form className='card_info'>
          <TextField
            // type="tel"
            name="number"
            placeholder="Номер карты"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            ref={ref}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxlength: 16}}
          />
          <TextField
            // type="text"
            name="name"
            placeholder="Имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
          />
          <TextField
            // type="text"
            name="expiry"
            placeholder="ММ/ГГ"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxlength: 4}}
          />
          <TextField
            // type="tel"
            name="cvc"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            inputProps={{ inputMode: 'numeric', pattern: '[0-9]*', maxlength: 3}}
          />
        </form>
        <Button className='button' variant='contained' onClick={()=>handleSendCard()}>Отправить</Button>
      </div>
    );
}