import React, { useState, useCallback } from 'react'
import World from './World';
import Control from './Control';


const numRow: number = 50;
const numCol: number = 50;

// Helper

const neighbors = [
    [-1,-1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0,  1],
    [1, -1],
    [1,  0],
    [1,  1]
]


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

    const onGridClick = (row:number, col:number):void => {
        let newRow = [...world[row]];
        newRow[col] = world[row][col] ? 0 : 1;
        let newWorld = [...world];
        newWorld[row] = newRow;
        setWorld(newWorld);
    }

    const nextGen = ():void => {
        let newWorld = generateEmptyWorld();
        for(let i = 0; i<numRow; i++) {
            for(let j = 0; j<numCol; j++) {
                let countLiveNeighbors = 0
                neighbors.forEach(([x,y]) => {
                    const newX = x+i;
                    const newY = y+j;
                    if (newX >= 0 && newX < numRow && newY >= 0 && newY < numCol) {
                        countLiveNeighbors += world[newX][newY];
                    }
                });
                if (countLiveNeighbors !== 0) {
                    console.log("row col : ", i, " ", j, " ", "neib : ", countLiveNeighbors)
                }
                if (countLiveNeighbors < 2 || countLiveNeighbors > 3) {
                    newWorld[i][j] = 0;
                }
                else if (countLiveNeighbors === 3) {
                    newWorld[i][j] = 1;
                }
                else {
                    newWorld[i][j] = world[i][j];
                }
            }
        }
        setWorld(newWorld);
    }

    const onPlay = (): void => {
        setPlaying(!playing);
        //runSimulation();
        
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
                nextGen={nextGen}
                onRandom={onRandom} 
                onClear={onClear}
            />
        </div>
    )
}

export default Board;
