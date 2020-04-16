import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img 
          alt="user" 
          src={`https://robohash.org/${props.user.id}?set=set&size=180x180`} />
        <h1>{props.user.name}</h1>
        <h3>{props.user.email}</h3>
    </div>
)