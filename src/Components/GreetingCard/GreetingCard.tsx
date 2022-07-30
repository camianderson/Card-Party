import React, { FC } from 'react'
import Card from '../../types/Card.type'
import './GreetingCard.css'

interface Props {
    to: string;
    quote: string;
    message: string;
    from: string
}

const GreetingCard: FC<Card> = ({ to, quote, message, from }) => {
    return (
        <section className="mini-card">
            <p className='mini-to'><b>To: {to}</b></p>
            <p className='mini-quote'>{quote}</p>
            <p className='mini-message'>{message}</p>
            <p className='mini-from'><b>From: {from}</b></p>
        </section>
    )
}

export default GreetingCard