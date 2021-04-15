import React from 'react';

const Card = (props) => {
         const { country } = props;

         return (
                  <li className="card">
                           <img src={country.flag} alt="flag"/>
                  </li>
         );
};

export default Card;