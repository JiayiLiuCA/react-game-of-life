import React, { useState } from 'react'
import World from './World';


const numRow:number = 100;
const numCol:number = 100;


const generateEmptyWorld = ():number[][] => {
    console.log("gen")
    const emptyWorld = [];
    for(let i = 0; i<numRow; i++) {
        emptyWorld.push(Array.from(Array(numCol), () => 0))
    }
    return emptyWorld;
}

const Board:React.FC = () => {
    const [world, setWorld] = useState(generateEmptyWorld());
    //const [generation, setGeneration] = useState(0);
    //const [playing, setPlaying] = useState(false);
    //console.log(world);
    return (
        <div className="board">
            <World world={world}/>
        </div>
    )
}

export default Board;
