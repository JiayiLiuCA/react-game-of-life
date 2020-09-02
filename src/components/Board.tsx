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

// Helper
const generateRandomWorld = (): number[][] => {
    const emptyWorld = [];
    for (let i = 0; i < numRow; i++) {
        emptyWorld.push(Array.from(Array(numCol), () => Math.round(Math.random())))
    }
    return emptyWorld;
}



const Board: React.FC = () => {
    const [world, setWorld] = useState(() => generateEmptyWorld());
    //const [generation, setGeneration] = useState(0);
    const [playing, setPlaying] = useState(false);
    //console.log(world);

    const onGridClick = (row:number, col:number):void => {
        console.log(row,col);
    }

    const onPlayClick = (): void => {
        setPlaying(!playing);
    }

    const onRandomClick = (): void => {
        setWorld(() => generateRandomWorld());
    }

    const onClearClick = (): void => {
        setWorld(() => generateEmptyWorld());
    }


    return (
        <div className="board">
            <World world={world} onGridClick={onGridClick}/>
            <Control
                playing={playing}
                onPlayClick={onPlayClick}
                onRandomClick={onRandomClick} 
                onClearClick={onClearClick}
            />
        </div>
    )
}

export default Board;
