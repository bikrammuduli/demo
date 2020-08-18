import React from 'react';

import { Card } from '../card/card.component';

export const CardList = props => (
    <div className="card-list">
        {props.monsters.map(monster => <Card monster={monster}/>)}   
    </div>
)