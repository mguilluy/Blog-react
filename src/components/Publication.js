import React from 'react';
import ChampPublication from '../components/ChampPublication';

const Publication = () => {
         return (
                  <div className="publication">
                           <ChampPublication/>

                           <h1>Blog</h1>
                           
                           <img src="./img/img-1.jpg"/>

                           <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus, ante id cursus consectetur, metus augue iaculis ligula, 
                                    at rhoncus est ante eu felis. Pellentesque laoreet bibendum consectetur. Phasellus eu ante in tortor feugiat hendrerit. 
                                    Etiam nec erat non augue facilisis dapibus. Nullam placerat sodales felis a pretium. Suspendisse accumsan magna dui, in tempor neque efficitur vel. 
                                    Phasellus vestibulum tincidunt viverra. Curabitur et elit maximus, eleifend libero elementum, consequat justo. Ut vitae porttitor odio. Quisque mauris tellus, rhoncus ut ante consequat, lobortis finibus risus. 
                                    Etiam in gravida quam, eget facilisis felis. Nam nibh mauris, sagittis eu euismod sed, pellentesque at lorem. 
                                    Suspendisse potenti. Aenean a facilisis ante. Vivamus nec commodo neque.
                           </p>
                  </div>
         );
};

export default Publication;