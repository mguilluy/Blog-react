import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
         const [data, setData] = useState([]);  //dans data on stocke la string Hello

          //Va chercher l'API
         useEffect(() => { //permet de "fetcher" (fetch)
                  axios 
                           .get('http://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
                           .then((res) => setData(res.data));

                  console.log(data);

         }, []);  //crochet vides permettent d'arreter de jouer, permet de ne pas faire de boucle infinie
         
         return (
                  <div className="countries">
                           <ul className="countries-list">
                                    {data.map((country) =>(
                                             <Card country={country} key={country.name}/>                    // props
                                    ))};
                           </ul>
                        
                  </div>
         );
};

export default Countries;