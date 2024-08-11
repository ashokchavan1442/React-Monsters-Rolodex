import React from 'react';
import './card-list.styles.css'
import Card from '../card/card.component';
const CradList = ({monsters}) => (
    <div className="card-list">
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return (
          <Card monster={monster} key={monster.id} />
        );
      })}
    </div>
  );
export default CradList;
