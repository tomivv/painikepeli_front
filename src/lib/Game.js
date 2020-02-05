import React from 'react';
import useGame from './useGame';
import GameInfo from './GameInfo';


export default function Game() {
  const { points, handlePoints, newGame, startNewGame, other } = useGame();
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
      <div className="main">
        <p>Sinulla on {points} pistettä</p>
        <input type="button" className="btn" value="Paina Nappia" onClick={handlePoints}></input>
        <GameInfo data={other} />
      </div>
    );
}