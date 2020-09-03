import React, { useState } from 'react'
import World from './World';
import Control from './Control';


const numRow: number = 50;
const numCol: number = 50;

// Helper
const generateEmptyWorld = (): number[][] => {
    console.log("gen")
    const emptyWorld = [];
    for (let i = 0; i < numRow; i++) {
        emptyWorld.push(Array.from(Array(numCol), () => 0))
    }
    return emptyWorld;
}

const generateRandomWorld = (): number[][] => {
    const emptyWorld = [];
    for (let i = 0; i < numRow; i++) {
        emptyWorld.push(Array.from(Array(numCol), () => Math.round(Math.random())))
    }
    return emptyWorld;
}

// End Helper



const Board: React.FC = () => {
    const [world, setWorld] = useState(() => generateEmptyWorld());
    //const [generation, setGeneration] = useState(0);
    const [playing, setPlaying] = useState(false);
    //console.log(world);

    const onGridClick = (row:number, col:number):void => {
        console.log(row,col)
        //let newWorld = world;
        //newWorld[row][col] = 1;
        //setWorld(newWorld);
    }

    const onPlay = (): void => {
        setPlaying(!playing);
    }

    const onRandom = (): void => {
        setWorld(() => generateRandomWorld());
    }

    const onClear = (): void => {
        setWorld(() => generateEmptyWorld());
    }


    return (
        <div className="board">
            <World world={world} onGridClick={onGridClick}/>
            <Control
                playing={playing}
                onPlay={onPlay}
                onRandom={onRandom} 
                onClear={onClear}
            />
        </div>
    )
}

export default Board;
