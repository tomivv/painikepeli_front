import React from 'react';
import useGame from './useGame';


export default function Game() {
  const { points, handlePoints, newGame, startNewGame } = useGame();

    if(newGame) {
        return (
          <div>
            <p>Sinulta loppui pisteet</p>
            <p>paina nappia aloittaaksesi uuden pelin</p>
            <input type="button" value="Aloita uusi peli" onClick={startNewGame}></input>
          </div>
        )
    }
    return (
      <div>
        <p>Sinulla on {points} pistettä</p>
        <input type="button" value="Paina Nappia" onClick={handlePoints}></input>
      </div>
    );
}