import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
    render() {
        let props = this.props;
        let pokecardArr = props.pokemon.map((p) => (
                                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                            ));
        let title;
        if(props.isWinner) {
            title = <h1 className="Pokedex-winner">Winning Hand</h1>;
        }  else {
            title = <h1 className="Pokedex-loser">Losing Hand</h1>;
        }
        return(
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {props.exp}!</h4>
                <div className="Pokedex-cards">
                    {pokecardArr}
                </div>
            </div>
        );
    }
}

export default Pokedex;