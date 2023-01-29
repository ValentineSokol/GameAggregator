import React from 'react';
import { STORE_LOGOS, VIEW_BOXES } from '../constants/storeLogos.js';

export const GameView = ({ name, price, store, url, Logo = STORE_LOGOS[store] }) => (
    <li>
        <h3><a href={url} target='_blank'>{name}  <Logo viewBox={VIEW_BOXES[store] || VIEW_BOXES.GOG} width={80} height={40} /></a></h3>
        <p>{price}</p>
    </li>

)