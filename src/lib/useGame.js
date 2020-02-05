import { useState, useEffect } from "react";

export default function useGame() {
    let currentPoints = parseInt(localStorage.getItem('points'));
    const [points, setPoints] = useState(null);
    const [other, setOther] = useState({});
    const [newGame, setNewGame] = useState(false);

    async function handlePoints() {
      const asd = await fetch('http://localhost:3001/game').then((response) => {
        return response.json();
      })
      if(asd.won) {
        localStorage.setItem('points', currentPoints + asd.points - 1)
        setPoints(currentPoints + asd.points - 1)
        setOther(asd);
      } else {
        if(points === 1 || currentPoints === 1) {
          setNewGame(true);
          localStorage.setItem('points', currentPoints - 1)
          setPoints(currentPoints - 1)
        } else {
          localStorage.setItem('points', currentPoints - 1)
          setPoints(currentPoints - 1)
          setOther(asd);
        }
        // ilmotus tarvittavista pisteistä
      }
    }

    async function startNewGame() {
      setNewGame(false);
      localStorage.setItem('points', '20')
      setPoints(20)
    }

    useEffect(() => {
      if(currentPoints === 0) {
        setNewGame(true);
      } else {
        if (isNaN(currentPoints)) {
          localStorage.setItem('points', '20')
          setPoints(20)
        } else {
          setPoints(currentPoints);
        }
      }
    }, [currentPoints]);
    
    return { points, handlePoints, newGame, startNewGame, other };
}
