import React, { useState } from 'react'

const numRow = 50;
const numCol = 50;

const generateEmptyGrid = () => {

}

const Board:React.FC = () => {
    const [grid, setGrid] = useState(() => {
        const row:any = [];
        return row;
    })
    const [generation, setGeneration] = useState(0);
    const [playing, setPlaying] = useState(false);
    return (
        <div>
            Board
        </div>
    )
}

export default Board;
