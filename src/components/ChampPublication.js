import React, { Component } from 'react';


class ChampPublication extends Component {
         state = {
                  comment: ''
         };

         handleComments = event => {
                  this.setState({
                           comment: event.target.value
                  })
         };

         render() {
                  return (
                           <div>
                                    <form>
                                             <label>Ajouter une publication :</label>
                                             <textarea value={this.state.comment} onChange={this.handleComments}></textarea>
                                             <input type="submit" value="Publier" />
                                    </form>
                           </div>
                  );
         }
                  
         };
export default ChampPublication;