import React from 'react';

export default function GameInfo({ data }) {
    if(typeof data.next === 'undefined') return (
        <div></div>
    )
    return (
        <div>
            {data.won ? (
                <p>{`Voitit ${data.points} pistettä!`}</p>
                ) : (
                    <p>{`Seuraavaan voittoon tarvitaan ${data.next} painallusta!`}</p>
                )
            }
        </div>
    )
}